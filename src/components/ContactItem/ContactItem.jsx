import { Flex, StyledButton } from 'components/ContactForm/ContactForm.styled'
import React from 'react'

export const ContactItem = ({name, number, id, onDeleteContact}) => {
  return (
      <li>
          <Flex>
          <h3>{name}: {number}</h3>
              <StyledButton onClick={() => onDeleteContact(id)}>Delete</StyledButton>
          </Flex>
      </li>
  )
}
