import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';

import * as stories from './CourseList.stories';

const { CourseListStory } = composeStories(stories);

test('reuses args from composed story', () => {
    render(<CourseListStory />);
    
    // https://storybook.js.org/addons/@storybook/testing-react
});
