import { Injectable, signal } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { forkJoin, map, mergeMap } from 'rxjs';
import { SoftSkillItem } from './soft-skill-item/soft-skill-item.model';

@Injectable({
  providedIn: 'root',
})
export class SoftSkillsService {
  private softSkillsCollection: AngularFirestoreCollection<SoftSkillItem>;

  softSkills = signal<SoftSkillItem[]>([]);

  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage
  ) {
    this.softSkillsCollection =
      this.firestore.collection<SoftSkillItem>('softSkills');

    this.getSoftSkills();
  }

  getSoftSkills() {
    const softSkills$ = this.softSkillsCollection
      .valueChanges({ idField: 'id' })
      .pipe(
        mergeMap((items: SoftSkillItem[]) => {
          const updatedItems$ = items.map((item) =>
            this.storage
              .ref(item.image)
              .getDownloadURL()
              .pipe(map((url: string) => ({ ...item, image: url })))
          );

          return forkJoin(updatedItems$);
        })
      );

    softSkills$.subscribe((softSkills) => this.softSkills.set(softSkills));
  }
}
