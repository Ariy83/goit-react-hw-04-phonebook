import React, { useState } from 'react'
import { StyledButton, StyledForm, StyledInput, StyledLabel } from './ContactForm.styled'

export const ContactForm = ({handleAddContact}) => {
  const [state, setState] = useState({
    name: '',
    number: ''
  })

  const handleChangeInput = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value })
	}

  const handleSubmit = e => {
    e.preventDefault();

    handleAddContact(state);
    
    setState({
      name: '',
      number: '',
		})
  }
  

  return (
    <StyledForm onSubmit={handleSubmit}>
        <StyledLabel>
          Name:
        <StyledInput value={state.name} onChange={handleChangeInput}
          type="text" name="name" required />
        </StyledLabel>

        <StyledLabel>
        Contacts
        <StyledInput value={state.number} onChange={handleChangeInput}
          type='tel' name='number' required />
        </StyledLabel>
        <StyledButton>Add contact</StyledButton>
      </StyledForm>
  )
}