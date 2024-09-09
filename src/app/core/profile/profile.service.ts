import { Injectable, signal } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Profile } from './profile.model';
import { first, map, switchMap } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ContactItem } from './contacts/contact-item/contact-item.model';
import { SocialItem } from './socials/social-item/social-item.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private profileCollection: AngularFirestoreCollection<Profile>;
  private contactsCollection: AngularFirestoreCollection<ContactItem>;
  private socialsCollection: AngularFirestoreCollection<SocialItem>;

  profile = signal<Profile | undefined>(undefined);
  contacts = signal<ContactItem[]>([]);
  socials = signal<SocialItem[]>([]);

  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage
  ) {
    this.profileCollection = this.firestore.collection<Profile>('profiles');
    this.contactsCollection =
      this.firestore.collection<ContactItem>('contacts');
    this.socialsCollection = this.firestore.collection<SocialItem>('socials');

    this.getProfile().subscribe();
    this.getContacts();
    this.getSocials();
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

  getContacts() {
    const contacts$ = this.contactsCollection.valueChanges({
      idField: 'id',
    });
    contacts$.subscribe((values) => this.contacts.set(values));
  }

  getSocials() {
    const socials$ = this.socialsCollection.valueChanges({
      idField: 'id',
    });
    socials$.subscribe((values) => this.socials.set(values));
  }
}
