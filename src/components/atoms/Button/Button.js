import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { BUTTON_STATE, getButtonStyleProp } from "./Button.utils"

const Wrapper = styled.button`
  border-radius: 4px;
  border: 0;
  padding: 8px 16px;
  background-color: ${getButtonStyleProp(BUTTON_STATE.rest)("backgroundColor")};
  color: ${getButtonStyleProp(BUTTON_STATE.rest)("color")};
  cursor: pointer;
  outline: none;
  transition: all 0.1s linear;
  border: ${getButtonStyleProp(BUTTON_STATE.rest)("border")};

  &&:hover {
    background-color: ${getButtonStyleProp(BUTTON_STATE.hover)(
      "backgroundColor"
    )};
    color: ${getButtonStyleProp(BUTTON_STATE.hover)("color")};
    border: ${getButtonStyleProp(BUTTON_STATE.hover)("border")}};
  }

  &&:active {
    background-color: ${getButtonStyleProp(BUTTON_STATE.active)(
      "backgroundColor"
    )};
    color: ${getButtonStyleProp(BUTTON_STATE.active)("color")};
    border: ${getButtonStyleProp(BUTTON_STATE.active)("border")};
  }
`

const Button = ({ isPrimary, children, onClick, ...props }) => {
  return (
    <Wrapper isPrimary={isPrimary} onClick={onClick} {...props}>
      {children}
    </Wrapper>
  )
}

Button.propTypes = {
  isPrimary: PropTypes.bool,
}

Button.defaultProps = {
  isPrimary: false,
}

export default Button
