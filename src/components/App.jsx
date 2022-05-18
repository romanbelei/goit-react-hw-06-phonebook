import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { connect } from 'react-redux';
import { filterAction } from '../redux/actions';

function App({ filter, changeFilter }) {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const addContact = (name, number) => {
    const noUniqueName = contacts
      .map(e => e.name.toLowerCase())
      .includes(name.toLowerCase());
    if (noUniqueName) {
      return alert(`${name} is already in contacts`);
    } else {
      const contact = {
        id: nanoid(),
        name: name,
        number: number,
      };
      setContacts(prevState => {
        return [...prevState, contact];
      });
    }
  };

  const removeContact = contactId => {
    setContacts(prevState => {
      return [...prevState].filter(({ id }) => id !== contactId);
    });
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <h2>Contactss</h2>
      <Filter value={filter} onFilter={changeFilter} />
      <ContactList
        contacts={contacts}
        filter={filter}
        onRemoveContact={removeContact}
      />
    </>
  );
}

const mapStateProps = state => {
  return { filter: state.filter };
};

const mapDispathToProps = dispath => {
  return { changeFilter: event => dispath(filterAction(event)) };
};
export default connect(mapStateProps, mapDispathToProps)(App);
