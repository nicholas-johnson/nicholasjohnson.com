import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';

import * as stories from './Post.stories';

const { PostStory } = composeStories(stories);

test('reuses args from composed story', () => {
    render(<PostStory />);
    
    // https://storybook.js.org/addons/@storybook/testing-react
});
