import React from "react"
import FormInput from "./FormInput"

export default {
  title: "Molecules/FormInput",
  component: FormInput,
}

const Template = (args) => <FormInput {...args} />

export const Base = Template.bind({})
Base.args = {
  label: "Field name",
  placeholder: "First name",
}
