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
}

export interface ICourseManifest {
  title: string
  img: string
  alt: string
  imgAlt: string
  exercises: IExercise[]
}

export interface ICourseManifests {
  courses: ICourseManifest[]
}
