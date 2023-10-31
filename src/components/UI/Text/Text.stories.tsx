import type { Meta, StoryObj } from '@storybook/react'

import Text from './Text'

const meta: Meta<typeof Text> = {
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'text',
    },
    children: {
      description: 'JSX object or text to the body of the component',
    },
  },
}

export default meta

type Story = StoryObj<typeof Text>

export const Primary: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
}
