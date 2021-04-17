import React from "react"
import EntryPage from "./EntryPage"

export default {
  title: "Pages/EntryPage",
  component: EntryPage,
}

const Template = (args) => <EntryPage {...args} />

export const Base = Template.bind({})
