import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from '@emotion/styled'

const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const TabsList = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #ccc;
`

const Tab = styled(NavLink)`
  padding: 10px 20px;
  cursor: pointer;
  background-color: #fff;
  border: none;
  border-bottom: 2px solid transparent;
  outline: none;
  transition:
    background 0.3s ease,
    border-bottom 0.3s ease;
  text-decoration: none;
  color: #000000;
  &.active {
    border-bottom: 2px solid #000;
  }
`

const Header = () => (
  <TabsContainer>
    <TabsList>
      <Tab to="/">List Item</Tab>
      <Tab to="/fibonacci">Fibonacci</Tab>
      <Tab to="/collatzConjecture">Collatz Conjecture</Tab>
    </TabsList>
  </TabsContainer>
)

export default Header
