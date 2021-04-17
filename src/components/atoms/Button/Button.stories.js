import React from "react"
import Button from "./Button"

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: { onClick: { action: "clicked" } },
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  isPrimary: true,
  children: "Click me",
}

export const Secondary = Template.bind({})
Secondary.args = {
  isPrimary: false,
  children: "Click me",
}
