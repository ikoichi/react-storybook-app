import React from "react"
import SignInForm from "./SignInForm"

export default {
  title: "Organisms/SignInForm",
  component: SignInForm,
}

const Template = (args) => <SignInForm {...args} />

export const Base = Template.bind({})
