import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { color } from "../../mixins"

const Wrapper = styled.input`
  ${({ theme }) => console.log("theme", theme)}
  padding: 8px;
  border: 1px solid ${color("primary600")};
  border-radius: 4px;
  outline: none;
  color: ${color("primary800")};

  :focus {
    border: 1px solid ${color("primary700")};
  }

  ::placeholder {
    color: ${color("secondary300")};
  }
`

const Input = ({ ...props }) => <Wrapper {...props} />

Input.propTypes = {
  placeholder: PropTypes.string,
}

Input.defaultProps = {
  placeholder: "",
}

export default Input
