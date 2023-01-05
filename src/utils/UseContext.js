/* eslint-disable react/prop-types */
import React, {createContext} from 'react';

export const UserContext = createContext();

export default function UseContextValue({children, ...values}) {
  return (
    <UserContext.Provider value={values}>
      {children}
    </UserContext.Provider>
  )
}