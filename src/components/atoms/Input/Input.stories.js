import React from "react"
import Input from "./Input"

export default {
  title: "Atoms/Input",
  component: Input,
  argTypes: { onChange: { action: "changed" } },
}

const Template = (args) => <Input {...args} />

export const Base = Template.bind({})
Base.args = {
  placeholder: "Placeholder",
}
