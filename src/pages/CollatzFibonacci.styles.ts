import styled from '@emotion/styled'

export const Container = styled.div`
  width: 696px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
`

export const Input = styled.input`
  width: 100%;
  height: 89px;
  border-radius: 8px;
  text-align: center;
  font-size: 48px;
  gap: 12px;
  color: #242424;
  border: 2px solid #cccccc;
  &:focus {
    outline: none;
  }
`

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
  height: 88px;
  border: 1px solid #e6e6e6;
  box-shadow: 0px 4px 22px 0px #0000000a;
  border-radius: 8px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

export const SubmitButton = styled.button`
  width: 146px;
  height: 40px;
  background-color: #242424;
  color: #ffff;
  border-radius: 8px;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  margin: 10px;
`

export const Divider = styled.div`
  width: 1440px;
  height: 1px;
  background-color: #eeee;
  align-self: center;
  margin: 20px 0;
`

export const ResultContainer = styled.div`
  width: 100%;
  height: 197px;
  display: flex;
  border-radius: 16px;
  justify-content: space-evenly;
  align-items: center;
  gap: 6px;
  border: 1px solid #cccccc;
  margin-bottom: 10px;
  flex-wrap: wrap;
`

export const ResultBox = styled.div`
  min-width: 210.67px;
  height: 138px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: #f1f1f1;
`
export const ResultContainerCollatz = styled.div`
  width: 100%;
  height: 170px;
  display: flex;
  border-radius: 16px;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid #cccccc;
  margin-bottom: 10px;
  flex-wrap: wrap;
`
export const ResultBoxCollatz = styled.div`
  font-size: 48px;
  font-weight: 600;
  width: 664px;
  height: 138px;
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: #f1f1f1;
`

export const NumberText = styled.p`
  text-align: center;
  color: #808080;
  font-weight: 600;
`

export const Title = styled.p`
  text-align: center;
  font-size: 48px;
  font-weight: 600;
`

export const Subtitle = styled.p`
  text-align: center;
  margin: 20px 0;
`
export const HeaderTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #242424;
`

export const StyledNumber = styled.div`
  width: 23px;
  height: 5px;
  background-color: #242424;
`
