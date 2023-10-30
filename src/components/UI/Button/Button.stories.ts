import type { Meta, StoryObj } from '@storybook/react'

import Button from './Button'

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    onClick: { control: 'function' },
    color: {
      defaultValue: { summary: 'black' },
      control: 'select',
      options: ['black', 'white', 'transparent'],
      description: 'Button color with pre-defined colors',
    },
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    text: 'Button',
    onClick: () => alert('click'),
  },
}
