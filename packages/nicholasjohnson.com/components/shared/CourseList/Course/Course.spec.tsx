import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';

import * as stories from './Course.stories';

const { CourseStory } = composeStories(stories);

test('reuses args from composed story', () => {
    render(<CourseStory />);
    
    // https://storybook.js.org/addons/@storybook/testing-react
});
