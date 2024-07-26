import styled from '@emotion/styled'

export const UserListContainer = styled.div`
  text-align: center;
  width: 100%;
  max-width: 1272px;
  height: auto;
  margin: auto;
  padding: 0 10px;
`

export const UserTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`

export const Heading = styled.p`
  text-align: center;
  font-size: 24px;
  font-weight: 200;

  span {
    font-weight: 600;
  }

  @media (min-width: 600px) {
    font-size: 48px;
  }
`

export const ContainerNewUser = styled.div`
  height: 68px;
  border-radius: 10px 10px 0px 0px;
  border-top: 2px solid #eeeeee;
  border-right: 2px solid #eeeeee;
  border-left: 2px solid #eeeeee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
`

export const AddUser = styled.button`
  width: 126px;
  cursor: pointer;
  background-color: #242424;
  color: #ffffff;
  border-radius: 8px;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
`

export const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  background-color: #fafafa;
  font-size: 12px;
`

export const HeaderTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #242424;
`

export const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  font-size: 14px;
`

export const Badge = styled.span<{ bgColor: string; textColor: string }>`
  width: 67px;
  height: 20px;
  border-radius: 33px;
  gap: 8px;
  color: ${(props) => props.textColor};
  background-color: ${(props) => props.bgColor};
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 600;
  margin: auto;
`

export const Pagination = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    margin: 0 10px;
  }
`

export const PageButton = styled.button`
  cursor: pointer;
  background-color: #242424;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;

  &:disabled {
    background-color: #dddddd;
    cursor: not-allowed;
  }
`

export const StyledLink = styled.p`
  color: white;
`
