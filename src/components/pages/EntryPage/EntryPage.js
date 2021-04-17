import React, { useState } from "react"
import styled, { css } from "styled-components"
import SignInForm from "../../organisms/SignInForm/SignInForm"
import TopBar from "../../organisms/TopBar/TopBar"
import SignUpForm from "../../organisms/SignUpForm/SignUpForm"
import { color } from "../../mixins"

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${color("secondary100")};
`

const StyledTopBar = styled(TopBar)`
  background-color: white;
`

const Content = styled.div`
  max-width: 70%;
  flex-grow: 1;
  display: flex;
`

const commonFormsCss = css`
  width: 350px;
  margin-top: 80px;
`

const StyledSignInForm = styled(SignInForm)`
  ${commonFormsCss}
`

const StyledSignUpForm = styled(SignUpForm)`
  ${commonFormsCss}
`

const EntryPage = () => {
  const [isSignInVisible, setSignInVisible] = useState(true)
  const [isSignUpVisible, setSignUpVisible] = useState(false)
  return (
    <Wrapper>
      <StyledTopBar
        onLogin={() => {
          setSignInVisible(true)
          setSignUpVisible(false)
        }}
        onSignUp={() => {
          setSignInVisible(false)
          setSignUpVisible(true)
        }}
      />
      <Content>
        {isSignInVisible && <StyledSignInForm />}
        {isSignUpVisible && <StyledSignUpForm />}
      </Content>
    </Wrapper>
  )
}

export default EntryPage
