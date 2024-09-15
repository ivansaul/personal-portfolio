import { Injectable } from '@angular/core';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { ContactForm } from './contact-form/contact-form.model';
import { from } from 'rxjs';

@Injectable()
export class ContactService {
  sendInquiry(contactForm: ContactForm) {
    const functions = getFunctions();

    const sendInquiryMail = httpsCallable<ContactForm>(
      functions,
      'sendInquiryMail'
    );

    return from(sendInquiryMail(contactForm));
  }
}
