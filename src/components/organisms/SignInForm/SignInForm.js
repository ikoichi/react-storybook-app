import React from "react"
import styled from "styled-components"
import FormInput from "../../molecules/FormInput/FormInput"
import Button from "../../atoms/Button/Button"

const Wrapper = styled.form``

const Title = styled.h3``

const StyledFormInput = styled(FormInput)`
  margin-bottom: 16px;
`

const ActionsRow = styled.div`
  margin-top: 8px;
  text-align: right;
`

const SignInForm = ({ ...props }) => (
  <Wrapper {...props}>
    <Title>Sign in</Title>
    <StyledFormInput label="Email" placeholder="john.doe@example.com..." />
    <StyledFormInput
      label="Password"
      placeholder="Choose a strong password..."
      type="password"
    />
    <ActionsRow>
      <Button>Reset</Button>
      <Button isPrimary>Login</Button>
    </ActionsRow>
  </Wrapper>
)

export default SignInForm
