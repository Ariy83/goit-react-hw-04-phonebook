import React from 'react'
import { StyledButton, StyledForm, StyledInput, StyledLabel } from './ContactForm.styled'

export class ContactForm extends React.Component {
  state = {
    name: '',
    number:''
  }

  handleChangeInput = ({ target }) => {
      const { name, value } = target;
      this.setState({ [name]: value })
	}

  handleSubmit = e => {
    e.preventDefault();

    this.props.handleAddContact(this.state);
    
    this.setState({
      name: '',
      number: '',
		})
  }

  render() {
    const { name, number } = this.state;
    
  return (
    <StyledForm onSubmit={this.handleSubmit}>
        <StyledLabel>
          Name:
        <StyledInput value={name} onChange={this.handleChangeInput}
          type="text" name="name" required />
        </StyledLabel>

        <StyledLabel>
        Contacts
        <StyledInput value={number} onChange={this.handleChangeInput}
          type='tel' name='number' required />
        </StyledLabel>
        <StyledButton>Add contact</StyledButton>
      </StyledForm>
  )
  }
 
}
