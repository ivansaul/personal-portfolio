import { Injectable, signal } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { ProjectItem } from './project-item.model';
import { forkJoin, map, switchMap } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  private projectsCollection: AngularFirestoreCollection<ProjectItem>;

  projects = signal<ProjectItem[]>([]);

  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage
  ) {
    this.projectsCollection =
      this.firestore.collection<ProjectItem>('projects');

    this.getProjects();
  }

  getProjects() {
    const projects$ = this.projectsCollection
      .valueChanges({
        idField: 'id',
      })
      .pipe(
        switchMap((items: ProjectItem[]) => {
          const updatedItems$ = items.map((item) =>
            this.storage
              .ref(item.image)
              .getDownloadURL()
              .pipe(map((url: string) => ({ ...item, image: url })))
          );

          return forkJoin(updatedItems$);
        })
      );

    projects$.subscribe((values) => this.projects.set(values));
  }
}
