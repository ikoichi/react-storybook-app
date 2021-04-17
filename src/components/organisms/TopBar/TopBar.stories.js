import React from "react"
import TopBar from "./TopBar"

export default {
  title: "Organisms/TopBar",
  component: TopBar,
  argTypes: { onLogin: { action: "changed" }, onSignUp: { action: "changed" } },
}

const Template = (args) => <TopBar {...args} />

export const Base = Template.bind({})
