import type { ICourse } from "../types/Course";

export const getFirstExercisePath = (course: ICourse) => {
  if (!course.exercises) {
    throw new Error(`Course ${course.slug} has no exercises. No way to link.`);
  }
  if (!course.exercises.length) {
    throw new Error(
      `Course ${course.slug} first exercise has no slug. No way to link.`
    );
  }
  return `/${course.slug}/${course.exercises[0].slug}`;
};
