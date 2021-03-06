import { useState } from "react"
import { Stack } from "../../Stack"
import { Radio, RadioGroup, RadioGroupProps } from "../src"
import { propConfig } from "~/utils/src/docPropConfig"
import { ChakraProvider } from "~/react"
import type { Meta } from "@storybook/react"
import { Button } from "../../Button"

export default {
  title: "RadioGroup",
  parameters: {
    component: RadioGroup,
    controls: { sort: "alpha" },
  },
  argTypes: { ...propConfig },
  decorators: [
    (Story) => (
      <ChakraProvider>
        <Story />
      </ChakraProvider>
    ),
  ],
} as Meta

export const Basic = (args: RadioGroupProps) => {
  const [value, setValue] = useState("")
  return (
    <RadioGroup {...args} value={value} onChange={setValue}>
      <Stack>
        <Radio value="Option 1">Option 1</Radio>
        <Radio value="Option 2">Option 2</Radio>
        <Radio value="Option 3">Option 3</Radio>
      </Stack>
      <Button mt={2} size="sm" onClick={() => setValue("")}>
        Clear
      </Button>
    </RadioGroup>
  )
}
