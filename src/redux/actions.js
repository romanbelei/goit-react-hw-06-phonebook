export const filterAction = event => ({
  type: 'filter',
  payload: event.currentTarget.value,
  //   payload: '',
});
