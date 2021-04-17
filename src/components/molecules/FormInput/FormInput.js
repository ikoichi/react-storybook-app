import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Input from "../../atoms/Input/Input"
import { color } from "../../mixins"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  margin-bottom: 4px;
  color: ${color("primary800")};
  font-weight: 600;
  font-size: 14px;
`

const FormInput = ({ label, placeholder, type, onChange, ...props }) => (
  <Wrapper {...props}>
    <Label>{label}</Label>
    <Input onChange={onChange} placeholder={placeholder} type={type} />
  </Wrapper>
)

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
}

export default FormInput
