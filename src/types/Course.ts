export interface ICourse {
  title: string;
  description: string;
  bullets: string[];
  slug: string;
  exercises: IExercise[];
  cover: string;
  coverAlt: string;
  coverCredit: string;
  coverCreditUrl: string;
  version: string;
  createdAt: string;
  lastUpdatedAt: string;
  deprecationNotice?: string;
  logo?: "";
  instructorLead?: {
    intro: string;
    testimonials: ITestimonial[];
    variants: ICourseVariant[];
  };
}

export interface ITestimonial {
  name: string;
  jobTitle: string;
  image: string;
  linkedIn: string;
  content: string;
}

export interface ICourseVariant {
  title: string;
  description: string;
  duration: number;
  price: number;
}

export interface IExercise {
  title: string;
  description: string;
  slug: string;
  code?: string;
  github?: string;
}
