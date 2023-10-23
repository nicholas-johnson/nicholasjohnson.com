import StoryWrapper from "components/StoryWrapper";

import { ContentPage, IContentPageProps } from './ContentPage';

const contentPageProps: IContentPageProps = {};

export const ContentPageStory = (args: IContentPageProps) => {
    return (
        <StoryWrapper>
            <ContentPage {...args} />
        </StoryWrapper>
    );
};

ContentPageStory.args = contentPageProps;

export default {
    title: 'Components/ContentPage',
    component: ContentPage,
};