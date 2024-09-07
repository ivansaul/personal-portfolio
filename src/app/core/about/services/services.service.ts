import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { ServiceItem } from './service-item/service-item.model';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { forkJoin, map, mergeMap, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  private servicesCollection: AngularFirestoreCollection<ServiceItem>;

  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage
  ) {
    this.servicesCollection =
      this.firestore.collection<ServiceItem>('services');
  }

  getServices(): Observable<ServiceItem[]> {
    return this.servicesCollection.valueChanges({ idField: 'id' }).pipe(
      mergeMap((items: ServiceItem[]) => {
        const updatedItems$ = items.map((item) =>
          this.storage
            .ref(item.image)
            .getDownloadURL()
            .pipe(map((url: string) => ({ ...item, image: url })))
        );

        return forkJoin(updatedItems$);
      })
    );
  }
}
