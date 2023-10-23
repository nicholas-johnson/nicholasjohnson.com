import StoryWrapper from "components/StoryWrapper";

import { Post, IPostProps } from './Post';

const postProps: IPostProps = {};

export const PostStory = (args: IPostProps) => {
    return (
        <StoryWrapper>
            <Post {...args} />
        </StoryWrapper>
    );
};

PostStory.args = postProps;

export default {
    title: 'Components/Post',
    component: Post,
};