import { Injectable, signal } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { ServiceItem } from './service-item/service-item.model';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { forkJoin, map, mergeMap, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  private servicesCollection: AngularFirestoreCollection<ServiceItem>;

  services = signal<ServiceItem[]>([]);

  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage
  ) {
    this.servicesCollection =
      this.firestore.collection<ServiceItem>('services');

    this.getServices();
  }

  getServices() {
    this.servicesCollection
      .valueChanges({ idField: 'id' })
      .pipe(
        switchMap((items: ServiceItem[]) => {
          const updatedItems$ = items.map((item) =>
            this.storage
              .ref(item.image)
              .getDownloadURL()
              .pipe(map((url: string) => ({ ...item, image: url })))
          );

          return forkJoin(updatedItems$);
        })
      )
      .subscribe((services) => {
        this.services.set(services);
      });
  }
}
