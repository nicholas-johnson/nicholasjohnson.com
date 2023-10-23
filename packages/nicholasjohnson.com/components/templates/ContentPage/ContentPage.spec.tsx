import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';

import * as stories from './ContentPage.stories';

const { ContentPageStory } = composeStories(stories);

test('reuses args from composed story', () => {
    render(<ContentPageStory />);
    
    // https://storybook.js.org/addons/@storybook/testing-react
});
