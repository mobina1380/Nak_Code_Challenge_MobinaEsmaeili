import React, { useState } from 'react'
import { calculateFibonacci } from '../utils/utils'
import {
  Container,
  Input,
  ButtonContainer,
  SubmitButton,
  Divider,
  ResultContainer,
  ResultBox,
  Title,
  NumberText,
  HeaderTitle,
  StyledNumber,
} from './CollatzFibonacci.styles'

const Fibonacci = () => {
  const [inputValue, setInputValue] = useState('')
  const [finalInputValue, setFinalInputValue] = useState<string | null>(null)
  const [prevFib, setPrevFib] = useState<number | null>(null)
  const [nextFib, setNextFib] = useState<number | null>(null)

  const handleSubmit = () => {
    const num = parseInt(inputValue, 10)
    if (!isNaN(num)) {
      const [prev, next] = calculateFibonacci(num)
      setPrevFib(prev)
      setNextFib(next)
      setFinalInputValue(inputValue)
    }
  }

  return (
    <>
      <Title>Fibonacci</Title>
      <Container>
        <HeaderTitle>Enter your number</HeaderTitle>
        <Input
          value={inputValue}
          tabIndex={0}
          autoFocus
          onChange={(e) => setInputValue(e.target.value)}
        />
        <ButtonContainer>
          <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
        </ButtonContainer>
        <Divider />
        <HeaderTitle>Result</HeaderTitle>

        <ResultContainer>
          <ResultBox>{prevFib !== null ? prevFib : <StyledNumber />}</ResultBox>
          <ResultBox>
            {finalInputValue !== null ? finalInputValue : <StyledNumber />}
          </ResultBox>
          <ResultBox>{nextFib !== null ? nextFib : <StyledNumber />}</ResultBox>
        </ResultContainer>
        <NumberText>Your Number</NumberText>
      </Container>
    </>
  )
}

export default Fibonacci
