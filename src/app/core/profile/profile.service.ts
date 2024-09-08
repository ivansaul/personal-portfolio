import { Injectable, signal } from '@angular/core';
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

  profile = signal<Profile | undefined>(undefined);

  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage
  ) {
    this.profileCollection = this.firestore.collection<Profile>('profile');
    this.getProfile().subscribe();
  }

  getProfile() {
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

              this.profile.set(profile);

              return profile;
            })
          )
      )
    );
  }
}
