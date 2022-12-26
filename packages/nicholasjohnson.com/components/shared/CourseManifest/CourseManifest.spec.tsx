import { composeStories } from '@storybook/testing-react'
import { render } from '@testing-library/react'

import * as stories from './CourseManifest.stories'

const { SidebarStory } = composeStories(stories)

test('reuses args from composed story', () => {
  render(<SidebarStory />)

  // https://storybook.js.org/addons/@storybook/testing-react
})
