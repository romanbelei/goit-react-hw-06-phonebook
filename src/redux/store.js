import { createStore } from 'redux';

const reducer = (
  state = { filter: '' },
  //     {
  // contacts: {
  //   items: [],
  //   filter: '',
  // },
  //   },
  { type, payload }
) => {
  //   console.log(action);
  switch (type) {
    case 'filter': {
      return { filter: payload };
    }
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
