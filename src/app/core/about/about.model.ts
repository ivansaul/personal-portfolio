import { ServiceItem } from './services/service-item/service-item.model';
import { SoftSkillItem } from './soft-skills/soft-skill-item/soft-skill-item.model';
import { TechItem } from './technologies/tech-item/tech-item.model';

export interface About {
  aboutMe: string[];
  services: ServiceItem[];
  softSkills: SoftSkillItem[];
  technologies: TechItem[];
}
