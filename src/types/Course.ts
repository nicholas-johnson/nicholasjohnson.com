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
}

export interface IExercise {
  title: string;
  description: string;
  slug: string;
  code?: string;
}
