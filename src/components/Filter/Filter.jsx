import { StyledInput, StyledLabel } from 'components/ContactForm/ContactForm.styled'
import React from 'react'

export const Filter = ({name, handleChangeFilter}) => {
  return (
    <StyledLabel>
          Find contacts by name:
          <StyledInput
              value={name} onChange={handleChangeFilter}
              name="filter" />
        </StyledLabel>
  )
}
