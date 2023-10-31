import type { Meta, StoryObj } from '@storybook/react'

import Input from './Input'

const meta: Meta<typeof Input> = {
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      description:
        'Input type from possible [types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types)',
    },
    ricon: {
      control: 'function',
    },
  },
}

export default meta

type Story = StoryObj<typeof Input>

export const Primary: Story = {
  args: {
    type: 'text',
  },
}
