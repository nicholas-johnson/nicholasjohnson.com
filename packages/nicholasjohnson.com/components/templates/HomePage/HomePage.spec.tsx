import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';

import * as stories from './HomePage.stories';

const { HomePageStory } = composeStories(stories);

test('reuses args from composed story', () => {
    render(<HomePageStory />);
    
    // https://storybook.js.org/addons/@storybook/testing-react
});
