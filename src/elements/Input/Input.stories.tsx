import React, { useState } from 'react'
import type { Story, Meta } from '@storybook/react'

import { Input } from './Input'

export default {
  title: 'Elements/Input',
  component: Input,
} as Meta

const Template: Story<any> = (args) => {
  const [value, setValue] = useState('')
  return <Input {...args} variant='round' value={value} onChange={setValue} placeholder="Placeholder" label="Label" />
}

export const Default = Template.bind({})
Default.args = {
  name: 'inputName',
}
