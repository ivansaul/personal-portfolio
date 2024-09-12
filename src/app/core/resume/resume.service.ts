import { Injectable, signal } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { ProgressItem } from './progress-list/progress-item/progress-item.model';
import { TimelineItem } from './timeline-list/timeline-item/timeline-item.model';

@Injectable()
export class ResumeService {
  private educationsCollection: AngularFirestoreCollection<TimelineItem>;
  private experiencesCollection: AngularFirestoreCollection<TimelineItem>;
  private techSkillsCollection: AngularFirestoreCollection<ProgressItem>;
  private languagesCollection: AngularFirestoreCollection<ProgressItem>;

  techSkills = signal<ProgressItem[]>([]);
  languages = signal<ProgressItem[]>([]);
  educations = signal<TimelineItem[]>([]);
  experiences = signal<TimelineItem[]>([]);

  constructor(private firestore: AngularFirestore) {
    this.techSkillsCollection =
      this.firestore.collection<ProgressItem>('techSkills');

    this.languagesCollection =
      this.firestore.collection<ProgressItem>('languages');

    this.educationsCollection =
      this.firestore.collection<TimelineItem>('educations');

    this.experiencesCollection =
      this.firestore.collection<TimelineItem>('experiences');

    this.getTechSkills();
    this.getLanguages();
    this.getEducations();
    this.getExperiences();
  }

  getTechSkills() {
    const techSkills$ = this.techSkillsCollection.valueChanges({
      idField: 'id',
    });

    techSkills$.subscribe((values) => this.techSkills.set(values));
  }

  getLanguages() {
    const languages$ = this.languagesCollection.valueChanges({
      idField: 'id',
    });

    languages$.subscribe((values) => this.languages.set(values));
  }

  getEducations() {
    const educations$ = this.educationsCollection.valueChanges({
      idField: 'id',
    });

    educations$.subscribe((values) => this.educations.set(values));
  }

  getExperiences() {
    const experiences$ = this.experiencesCollection.valueChanges({
      idField: 'id',
    });

    experiences$.subscribe((values) => this.experiences.set(values));
  }
}
