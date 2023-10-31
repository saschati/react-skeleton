import type { Meta, StoryObj } from '@storybook/react'

import Paginate from './Paginate'

const meta: Meta<typeof Paginate> = {
  component: Paginate,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'UI Component for building pagination',
      },
    },
  },
  argTypes: {
    onChange: {
      description: 'Action to change the page',
    },
    pageCount: {
      description: 'Number of pagination pages',
    },
    forcePage: {
      description: 'Current pagination page',
    },
  },
}

export default meta

type Story = StoryObj<typeof Paginate>

export const Primary: Story = {
  args: {
    onChange: (page) => alert(page),
    pageCount: 100,
    forcePage: 5,
  },
}
