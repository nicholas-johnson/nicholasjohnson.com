import { FC } from "react";

import styles from './Course.module.scss'

export interface ICourseProps {}

export const Course: FC< ICourseProps> = ({}: ICourseProps) => {
    return (
        <div className={styles.Course>
            Course
        </div>
    );
};
