import React from "react"
import { StyledTitle } from "./ContactForm/ContactForm.styled"
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { nanoid } from "nanoid";
import { ContactForm } from "./ContactForm/ContactForm";
import storage from "./storage/storage";

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  }

  componentDidMount() {
    const contacts = storage.load(storage.KEY);
    if (contacts?.length) {
      this.setState({contacts})
    }
  }
  componentDidUpdate(_,prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      storage.save(storage.KEY, this.state.contacts)
    }
  }
  
  handleAddContact = ({ name, number }) => {
    if (this.state.contacts.find(contact => contact.name === name)) {
      window.alert(`${name} is already in contacts`)
      return
    }
    const newContact = { id: nanoid(), name, number, }
    
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact]
    }))
  }

  handleChangeFilter = e => {
    this.setState({ filter: e.target.value })
	}

  handleDeleteContact = id => {
		this.setState(prevState => ({ contacts: prevState.contacts.filter(user => user.id !== id) }))
  }
  
  getFilteredData = () => {
		return this.state.contacts
			.filter( contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()) 
			)
	}
  
  render() {
    
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101'
      }}
    >

      <StyledTitle>Phonebook</StyledTitle>
      <ContactForm handleAddContact={this.handleAddContact}
       />

      <h2>Contacts</h2>
      <Filter handleChangeFilter={ this.handleChangeFilter} />
      <ContactList
        contacts={this.getFilteredData()}
        onDeleteContact={this.handleDeleteContact} />
      
    </div>
  )}
};
