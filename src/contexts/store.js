import React, { useReducer } from 'react';

const initialState = {
  todos: []
};

function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case 'SET_TODOS': {
      return { ...state, todos: payload }
    }
    default:
      return state;
  }
}

const Store = React.createContext(initialState);

function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Store.Provider value={{ state, dispatch }}>{props.children}</Store.Provider>
}

export { Store, StoreProvider }