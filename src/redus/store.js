import { createStore } from 'redux';
import { nanoid } from 'nanoid';

const reducer = (
  state = {
    contacts: {
      items: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
    },
  },
  { type, payload }
) => {
  //   console.log(action);
  switch (type) {
    case 'filter': {
      return {
        ...state,
        contacts: {
          ...state.contacts,
          filter: payload,
        },
      };
    }
    case 'contact/add': {
      const noUniqueName = state.contacts.items
        .map(e => e.name.toLowerCase())
        .includes(payload.name.toLowerCase());
      if (noUniqueName) {
        return alert(`${payload.name} is already in contacts`);
      } else {
        const contact = {
          id: nanoid(),
          name: payload.name,
          number: payload.number,
        };
        return {
          ...state,
          contacts: {
            ...state.contacts,
            items: [...state.contacts.items, contact],
          },
        };
      }
    }
    case 'contact/remove': {
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: [...state.contacts.items].filter(({ id }) => id !== payload),
        },
      };
    }
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;

// return { filter: payload };
