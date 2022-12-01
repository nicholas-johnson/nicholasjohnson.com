import StoryWrapper from "components/StoryWrapper";

import { HomePage, IHomePageProps } from './HomePage';

const homePageProps: IHomePageProps = {};

export const HomePageStory = (args: IHomePageProps) => {
    return (
        <StoryWrapper>
            <HomePage {...args} />
        </StoryWrapper>
    );
};

HomePageStory.args = homePageProps;

export default {
    title: 'Components/HomePage',
    component: HomePage,
};