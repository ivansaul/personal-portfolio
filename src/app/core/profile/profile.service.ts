import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Profile } from './profile.model';
import { first, map, Observable, switchMap } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private profileCollection: AngularFirestoreCollection<Profile>;

  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage
  ) {
    this.profileCollection = this.firestore.collection<Profile>('profile');
  }

  getProfile(): Observable<Profile> {
    return this.profileCollection.valueChanges({ idField: 'id' }).pipe(
      first(),
      map((items) => items[0]),
      switchMap((profile: Profile) =>
        this.storage
          .ref(profile.avatar)
          .getDownloadURL()
          .pipe(
            map((fileURL) => {
              profile.avatar = fileURL;
              return profile;
            })
          )
      )
    );
  }
}
