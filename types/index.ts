export interface IBlogPost {
  title: string
  slug: string
  type: 'post'
}

export interface ISeries {
  title: string
  slug: string
  type: 'series'
}

export interface IExercise {
  slug: string
  title: string
  description: string
}

export interface ICourseManifest {
  title: string
  slug: string
  img: string
  exercises: IExercise[]
}
