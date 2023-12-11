import React, { useEffect, useState } from "react"
import { StyledTitle } from "./ContactForm/ContactForm.styled"
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { nanoid } from "nanoid";
import { ContactForm } from "./ContactForm/ContactForm";
import storage from "./storage/storage";

export const App = () => {
  const [filter, setFilter] = useState('')
  const [contacts, setContacts] = useState(
    () => {
      const contacts = storage.load(storage.KEY);
      if (contacts?.length) {
        return contacts
      }
      return []
    }
  )

  useEffect(() => {
    storage.save(storage.KEY, contacts)
  }, [contacts])
  
  const handleAddContact = ({ name, number }) => {
    if (contacts.find(contact => contact.name === name)) {
      window.alert(`${name} is already in contacts`)
      return
    }
    const newContact = { id: nanoid(), name, number, }
    setContacts(prevState => [...prevState, newContact])
  }

  const handleChangeFilter = e => {
    setFilter(e.target.value)
  }

  const handleDeleteContact = id => {
    setContacts(prevState => prevState.filter(user => user.id !== id) )
  }
  
  const getFilteredData = () => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()) 
    )
  }

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
      <ContactForm handleAddContact={handleAddContact}
       />

      <h2>Contacts</h2>
      <Filter handleChangeFilter={ handleChangeFilter} />
      <ContactList
        contacts={getFilteredData()}
        onDeleteContact={handleDeleteContact} />
      
    </div>
  )
}