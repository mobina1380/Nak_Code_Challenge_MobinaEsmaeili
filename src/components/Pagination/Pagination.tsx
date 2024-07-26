import React from 'react'
import { Pagination, PageButton } from '../Rows/Row.styles'
import { isValidArray } from '../../utils/utils'
import { PaginationRowsProps } from '../../types/types'

const PaginationRows: React.FC<PaginationRowsProps> = ({
  currentRows,
  handlePreviousPage,
  currentPage,
  totalPages,
  handleNextPage,
}) => {
  if (!isValidArray(currentRows)) return null
  return (
    <Pagination>
      <PageButton onClick={handlePreviousPage} disabled={currentPage === 1}>
        Previous
      </PageButton>
      <span>
        {currentPage} / {totalPages}
      </span>
      <PageButton
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        Next
      </PageButton>
    </Pagination>
  )
}

export default PaginationRows
