import React, { useState } from 'react'
import { useUserStore } from '../store/userStore'
import { useNavigate } from 'react-router-dom'
import { isValidArray } from '../utils/utils'
import {
  UserListContainer,
  UserTable,
  ContainerNewUser,
  AddUser,
  TableHeader,
  StyledLink,
  HeaderTitle,
  Heading,
} from '../components/Rows/Row.styles'
import UserRow from '../components/Rows/Row'
import PaginationRows from '../components/Pagination/Pagination'

const UserList = () => {
  const { users } = useUserStore()
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1)
  const rowsPerPage = 10

  const AddNewItem = () => {
    navigate(`/create`)
  }
  const EditHandler = (userId: number) => {
    navigate(`/edit/${userId}`)
  }

  const totalPages = Math.ceil(users.length / rowsPerPage)
  const startIndex = (currentPage - 1) * rowsPerPage
  const endIndex = startIndex + rowsPerPage
  const currentRows = users.slice(startIndex, endIndex)

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1)
    }
  }

  return (
    <>
      <Heading>
        <span>List</span> Item
      </Heading>
      <UserListContainer>
        <ContainerNewUser>
          <HeaderTitle>Items</HeaderTitle>
          <AddUser onClick={AddNewItem}>
            <StyledLink>Add New Item +</StyledLink>
          </AddUser>
        </ContainerNewUser>
        <UserTable>
          <thead>
            <tr>
              <TableHeader>Item</TableHeader>
              <TableHeader>Name</TableHeader>
              <TableHeader>Username</TableHeader>
              <TableHeader>Email</TableHeader>
              <TableHeader>Phone</TableHeader>
              <TableHeader>Status</TableHeader>
            </tr>
          </thead>
          <tbody>
            {isValidArray(currentRows) &&
              currentRows.map((user, index) => (
                <UserRow
                  key={user.userName}
                  user={user}
                  index={startIndex + index}
                  onEdit={EditHandler}
                />
              ))}
          </tbody>
        </UserTable>
        <PaginationRows
          currentRows={currentRows}
          handlePreviousPage={handlePreviousPage}
          currentPage={currentPage}
          totalPages={totalPages}
          handleNextPage={handleNextPage}
        />
      </UserListContainer>
    </>
  )
}

export default UserList
