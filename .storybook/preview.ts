import type { Preview } from '@storybook/react'

import '../src/styles/index.scss'
import './preview.scss'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ['UI', 'Common', 'Domain'],
      },
    },
  },
}

export default preview
