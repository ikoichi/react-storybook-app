import React from "react"
import styled from "styled-components"
import FormInput from "../../molecules/FormInput/FormInput"
import Button from "../../atoms/Button/Button"
import { color } from "../../mixins"

const Wrapper = styled.form``

const Title = styled.h3`
  color: ${color("primary900")};
`

const StyledFormInput = styled(FormInput)`
  margin-bottom: 16px;
`

const ActionsRow = styled.div`
  margin-top: 8px;
  text-align: right;
`

const ResetButton = styled(Button)`
  margin-right: 16px;
`

const SignUpForm = ({ ...props }) => (
  <Wrapper {...props}>
    <Title>Sign up</Title>
    <StyledFormInput label="Full name" placeholder="John Doe" />
    <StyledFormInput label="Email" placeholder="john.doe@example.com" />
    <StyledFormInput
      label="Password"
      type="password"
      placeholder="Choose a strong password..."
    />
    <ActionsRow>
      <ResetButton>Reset</ResetButton>
      <Button isPrimary>Create account</Button>
    </ActionsRow>
  </Wrapper>
)

export default SignUpForm
