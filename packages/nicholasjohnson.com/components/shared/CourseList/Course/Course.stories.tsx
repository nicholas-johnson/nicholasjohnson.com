import StoryWrapper from "components/StoryWrapper";

import { Course, ICourseProps } from './Course';

const courseProps: ICourseProps = {};

export const CourseStory = (args: ICourseProps) => {
    return (
        <StoryWrapper>
            <Course {...args} />
        </StoryWrapper>
    );
};

CourseStory.args = courseProps;

export default {
    title: 'Components/Course',
    component: Course,
};