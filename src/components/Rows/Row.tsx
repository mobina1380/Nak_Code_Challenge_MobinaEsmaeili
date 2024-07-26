import React from 'react'
import { TableCell, Badge } from './Row.styles'
import { User } from '../../types/types'

interface UserRowProps {
  user: User
  index: number
  onEdit: (userId: number) => void
}

const UserRow: React.FC<UserRowProps> = ({ user, index, onEdit }) => {
  const selectColor: { [key: string]: [string, string, string] } = {
    active: ['#EBFFF1', '#0FBD66', 'Active'],
    not_active: ['#FCEEEE', '#DC362E', 'Not Active'],
  }

  const BadgeFunction = () => {
    if (user.status === null || !selectColor[user.status]) {
      return (
        <Badge bgColor="#F1F1F1" textColor="#242424">
          Unknown
        </Badge>
      )
    } else {
      return (
        <Badge
          bgColor={selectColor[user.status][0]}
          textColor={selectColor[user.status][1]}
        >
          {selectColor[user.status][2]}
        </Badge>
      )
    }
  }

  return (
    <tr onClick={() => onEdit(index + 1)} style={{ cursor: 'pointer' }}>
      <TableCell>{index + 1}</TableCell>
      <TableCell>{user.name}</TableCell>
      <TableCell>{user.userName}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>{user.phone}</TableCell>
      <TableCell>
        <BadgeFunction />
      </TableCell>
    </tr>
  )
}

export default UserRow
