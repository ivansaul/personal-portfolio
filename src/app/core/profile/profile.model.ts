import { ContactItem } from './contacts/contact-item/contact-item.model';
import { SocialItem } from './socials/social-item/social-item.model';

export interface Profile {
  id?: string;
  avatar: string;
  name: string;
  title: string;
  contacts: ContactItem[];
  socials: SocialItem[];
  presentation: string[];
}
