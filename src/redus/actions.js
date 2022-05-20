export const filterAction = event => ({
  type: 'filter',
  payload: event.currentTarget.value,
  //   payload: '',
});

export const addContactAction = (name, number) => ({
  type: 'contact/add',
  payload: { name: name, number: number },
});

export const removeContactAction = contactId => ({
  type: 'contact/remove',
  payload: contactId,
});
