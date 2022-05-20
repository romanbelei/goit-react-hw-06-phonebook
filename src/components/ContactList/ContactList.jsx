import React from 'react';
import { connect } from 'react-redux';
import { removeContactAction } from '../../redus/actions';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

function ContactList({ contacts, filter, removeContact }) {
  return (
    <ul className={styles.contactList}>
      {contacts
        .filter(e => e.name.toLowerCase().includes(filter.toLowerCase()))
        .map(contact => {
          return (
            <li className={styles.itemList} key={contact.id}>
              {contact.name}: {contact.number}
              <button
                className={styles.buttonDelete}
                key={contact.id}
                name={contact.name}
                type="button"
                onClick={() => removeContact(contact.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

const mapStateProps = state => {
  return {
    filter: state.contacts.filter,
    contacts: state.contacts.items,
  };
};

const mapDispathToProps = dispath => {
  return {
    removeContact: contactId => dispath(removeContactAction(contactId)),
  };
};

export default connect(mapStateProps, mapDispathToProps)(ContactList);
