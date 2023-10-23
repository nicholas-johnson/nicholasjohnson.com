import StoryWrapper from "components/StoryWrapper";

import { CourseList, ICourseListProps } from './CourseList';

const courseListProps: ICourseListProps = {};

export const CourseListStory = (args: ICourseListProps) => {
    return (
        <StoryWrapper>
            <CourseList {...args} />
        </StoryWrapper>
    );
};

CourseListStory.args = courseListProps;

export default {
    title: 'Components/CourseList',
    component: CourseList,
};