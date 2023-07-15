import { createContext, useContext, useState } from "react";

export const ResponsesContext = createContext();

export const Providers = ({ children }) => {
  const [responses, setResponses] = useState([]);
  const [finalTime, setFinalTime] = useState(null);

  return (
    <ResponsesContext.Provider value={{ responses, setResponses, finalTime, setFinalTime }}>
      {children}
    </ResponsesContext.Provider>
  );
};

export const useContextResponse = () => useContext(ResponsesContext);
