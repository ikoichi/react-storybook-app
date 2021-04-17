import React from "react"
import SignUpForm from "./SignUpForm"

export default {
  title: "Organisms/SignUpForm",
  component: SignUpForm,
}

const Template = (args) => <SignUpForm {...args} />

export const Base = Template.bind({})
