import { Injectable, signal } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { TechItem } from './tech-item/tech-item.model';
import { forkJoin, map, mergeMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TechnologiesService {
  private technologiesCollection: AngularFirestoreCollection<TechItem>;

  technologies = signal<TechItem[]>([]);

  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage
  ) {
    this.technologiesCollection =
      this.firestore.collection<TechItem>('technologies');

    this.getTechnologies();
  }

  getTechnologies() {
    const technologies$ = this.technologiesCollection
      .valueChanges({ idField: 'id' })
      .pipe(
        mergeMap((items: TechItem[]) => {
          const updatedItems$ = items.map((item) =>
            this.storage
              .ref(item.image)
              .getDownloadURL()
              .pipe(map((url: string) => ({ ...item, image: url })))
          );

          return forkJoin(updatedItems$);
        })
      );

    technologies$.subscribe((technologies) =>
      this.technologies.set(technologies)
    );
  }
}
