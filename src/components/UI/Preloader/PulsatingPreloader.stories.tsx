import type { Meta, StoryObj } from '@storybook/react'

import PulsatingPreloader from './PulsatingPreloader'

const meta: Meta<typeof PulsatingPreloader> = {
  component: PulsatingPreloader,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof PulsatingPreloader>

export const Primary: Story = {
  args: {},
}
