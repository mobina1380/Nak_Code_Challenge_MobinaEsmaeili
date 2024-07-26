import React, { useState } from 'react'
import {
  Container,
  Input,
  ButtonContainer,
  SubmitButton,
  Divider,
  Title,
  HeaderTitle,
  ResultBoxCollatz,
  ResultContainerCollatz,
} from './CollatzFibonacci.styles'
import { calculateCollatzLoops } from '../utils/utils'

const CollatzConjecture = () => {
  const [inputValue, setInputValue] = useState('')
  const [result, setResult] = useState<string>('')

  const handleSubmit = () => {
    const num = parseInt(inputValue, 10)
    if (!isNaN(num) && num > 0) {
      const loops = calculateCollatzLoops(num)
      setResult(`${loops}`)
    } else {
      setResult('Please enter a valid positive number.')
    }
  }

  return (
    <>
      <Title>Collatz Conjecture</Title>
      <Container>
        <HeaderTitle>Enter your number</HeaderTitle>
        <Input
          value={inputValue}
          tabIndex={0}
          autoFocus
          onChange={(e) => setInputValue(e.target.value)}
        />
        <ButtonContainer>
          <SubmitButton onClick={handleSubmit}>Calculate Cycles</SubmitButton>
        </ButtonContainer>
        <Divider />
        <HeaderTitle>Result</HeaderTitle>
        <ResultContainerCollatz>
          <ResultBoxCollatz>{result}</ResultBoxCollatz>
        </ResultContainerCollatz>
      </Container>
    </>
  )
}

export default CollatzConjecture
