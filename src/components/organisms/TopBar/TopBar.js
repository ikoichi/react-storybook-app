import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Button from "../../atoms/Button/Button"

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  padding: 16px;
  align-items: center;
  box-shadow: 0 5px 5px #dddddd;
  box-sizing: border-box;

  button {
    margin-right: 16px;
  }

  button:last-child {
    margin-right: 0;
  }
`

const BrandName = styled.div`
  flex-grow: 1;
`

const Actions = styled.div``

const TopBar = ({ onLogin, onSignUp, ...props }) => (
  <Wrapper {...props}>
    <BrandName>My brand</BrandName>
    <Actions>
      <Button onClick={onLogin}>Login</Button>
      <Button isPrimary onClick={onSignUp}>
        Sign up
      </Button>
    </Actions>
  </Wrapper>
)

TopBar.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onSignUp: PropTypes.func.isRequired,
}

export default TopBar
