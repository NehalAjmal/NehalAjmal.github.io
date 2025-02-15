import * as SimpleIcons from '@icons-pack/react-simple-icons'

export type SimpleIconName = keyof typeof SimpleIcons;

export interface Notification {
  error: boolean;
  message: string;
  active: boolean;
  sended: boolean;
}

export interface Date {
  from: string | null;
  to: string | null;
}

export interface Demo {
  repository: string | null;
  preview: string | null
}

export interface Quote {
  phrase: string[];
  author: string;
}

export interface Social {
  name: string;
  url: string;
  icon: SimpleIconName;
}

export interface Tech {
  name: string;
  icon: SimpleIconName;
}

export interface Project {
  title: string;
  description: string[];
  techs: Tech[]
  image: string;
  date: Date;
  features: string[] | null;
  note: string | null;
  demo: Demo;
}

export interface Portfolio {
  name: string;
  role: string;
  about: string[];
  socials: Social[];
  techs: Tech[];
  projects: Project[];
  quote: Quote | null
}
