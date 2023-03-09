import { createContext, useState, useEffect } from 'react';

export const dataContext = createContext();

export function DataContextProvider(props) {
  const [index, setI] = useState(1);

  return <dataContext.Provider value={{ index, setI }}>{props.children}</dataContext.Provider>;
}
