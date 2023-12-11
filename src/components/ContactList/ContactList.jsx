import { StyledButton } from 'components/ContactForm/ContactForm.styled'
import { ContactItem } from 'components/ContactItem/ContactItem'
import { nanoid } from 'nanoid'
import React from 'react'

export const ContactList = ({contacts=[], onDeleteContact}) => {
  return (
      <ul>
          {contacts.map(contact => (
            <ContactItem id={nanoid()} key={contact.number}
              {...contact}
              name={contact.name}
              number={contact.number}
              onDeleteContact={onDeleteContact}>
              <StyledButton >Add contact</StyledButton>
            </ContactItem>
			))}
      </ul>
  )
}
