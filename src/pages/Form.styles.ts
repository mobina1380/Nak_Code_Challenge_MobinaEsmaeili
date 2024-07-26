import styled from '@emotion/styled'

// Form and Layout
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1272px;
  padding: 0 10px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const InputContainer = styled.div`
  flex: 1;
  margin: 10px;
  max-width: 392px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`

// Labels and Inputs
export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`

export const Input = styled.input`
  width: 100%;
  height: 32px;
  border-radius: 8px;
  border: 1px solid #ababab;
  padding-left: 5px;

  &:focus {
    outline: none;
    border: 1px solid #ababab;
  }

  @media (max-width: 768px) {
    height: 40px;
    font-size: 14px;
  }
`

export const Select = styled.select`
  width: 100%;
  height: 32px;
  border: 1px solid #ababab;
  border-radius: 8px;
  padding: 0 10px;

  @media (max-width: 768px) {
    height: 40px;
    font-size: 14px;
  }
`

// Button and Feedback
export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  margin-top: 20px;
  height: 88px;
  border: 1px solid #e6e6e6;
  box-shadow: 0px 4px 22px 0px #0000000a;
  border-radius: 8px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

export const SubmitButton = styled.button<{ disabled: boolean }>`
  width: 146px;
  height: 40px;
  background-color: ${({ disabled }) => (disabled ? '#f1f1f1' : '#242424')};
  color: ${({ disabled }) => (disabled ? '#ababab' : '#fff')};
  border-radius: 8px;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  border: none;

  @media (max-width: 768px) {
    width: 100px;
    height: 35px;
    font-size: 10px;
  }
`

// Page Heading
export const Heading = styled.p`
  text-align: center;
  font-size: 24px;
  font-weight: 200;

  span {
    font-weight: 600;
  }

  @media (min-width: 768px) {
    font-size: 48px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`

// Error Messages
export const ErrorMessage = styled.span`
  color: #dc362e;
  display: block;
  margin-top: 5px;
  font-size: 12px;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`

// Error Highlight Span
export const ErrorHighlight = styled.span`
  color: #dc362e;
`

// Select components
export const SelectContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 392px;
  margin: 10px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`

export const SelectButton = styled.div`
  position: relative;
  height: 32px;
  padding: 0px 5px;
  background-color: #fff;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ababab;

  @media (max-width: 768px) {
    height: 40px;
  }
`

export const SelectedValue = styled.div`
  font-size: 16px;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

export const Chevrons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  color: #e6e6e6;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`

export const Options = styled.div<{ isVisible: boolean }>`
  position: absolute;
  right: 0;
  left: 0;
  width: 100%;
  margin: 10px auto;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};

  @media (max-width: 768px) {
    margin: 5px auto;
  }
`

export const Option = styled.label`
  color: #808080;
  font-size: 12px;
  font-weight: 600;
  position: relative;
  line-height: 1;
  transition: 0.3s ease all;
  z-index: 2;
  padding: 12px 14px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f2f2f2;

  &:hover {
    background-color: #f2f2f2;
  }

  @media (max-width: 768px) {
    font-size: 10px;
    padding: 10px 12px;
  }
`

export const SelectRadio = styled.input`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  opacity: 0;
  cursor: pointer;
`
