export interface ContactItem {
  icon: string;
  title: string;
  value: string;
  link?: string;
  type?: 'link' | 'address' | 'date';
}
