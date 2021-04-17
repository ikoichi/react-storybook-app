import React from "react"
import styled from "styled-components"
import theme from "./theme"

export default {
  title: "Theme",
}

const Div = styled.div`
  height: 20px;
  width: 100px;
  font-size: 12px;
  text-align: center;
`

export const PrimaryColors = () =>
  [1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => {
    const shadeName = `primary${number}00`
    return (
      <Div style={{ backgroundColor: theme.colors[shadeName] }}>
        {shadeName}
      </Div>
    )
  })

export const SecondaryColors = () =>
  [1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => {
    const shadeName = `secondary${number}00`
    return (
      <Div style={{ backgroundColor: theme.colors[shadeName] }}>
        {shadeName}
      </Div>
    )
  })
