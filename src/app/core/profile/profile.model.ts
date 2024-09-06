import { ContactItem } from './contacts/contact-item/contact-item.model';
import { SocialItem } from './socials/social-item/social-item.model';

export interface Profile {
  avatar: string;
  name: string;
  title: string;
  contacts: ContactItem[];
  socials: SocialItem[];
}
