export interface User {
  name: string
  userName: string
  email: string
  phone: string
  status: 'active' | 'not_active' | null
}

export interface PaginationRowsProps {
  currentRows: Array<User>
  handlePreviousPage: () => void
  currentPage: number
  totalPages: number
  handleNextPage: () => void
}
