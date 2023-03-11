import { createContext, useState, useEffect } from 'react';

export const dataContext = createContext();

export function DataContextProvider(props) {
  const [index, setI] = useState(1);
  const [menu, set] = useState(false);
  const [menu2, setM] = useState(1);

  return <dataContext.Provider value={{ index, setI, menu, set, menu2, setM }}>{props.children}</dataContext.Provider>;
}
