import React, { createContext, useReducer } from 'react';

import appReducer from './AppReducer';

const initialState = {
  contributions: [
    {
      id: 1,
      name: "Hardy Kathurima",
      amount: 2000,
    },
    {
        id: 2,
        name: "Russell Goff",
        amount: 1000
      }
  ]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);


  function addContribution(contribution) {
    dispatch({
      type: "ADD_CONTRIBUTION",
      payload: contribution
    });
  }

  function editContribution(contribution) {
    dispatch({
      type: "EDIT_CONTRIBUTION",
      payload: contribution
    });
  }

  function removeContribution(id) {
    dispatch({
      type: "REMOVE_CONTRIBUTION",
      payload: id
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        contributions: state.contributions,
        addContribution,
        editContribution,
        removeContribution,
        
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};