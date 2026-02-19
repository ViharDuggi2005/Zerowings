import { createContext, useState } from "react";

export const BackgroundContext = createContext();

export function BackgroundProvider({ children }) {
  const [backgroundImage, setBackgroundImage] = useState(null);

  return (
    <BackgroundContext.Provider value={{ backgroundImage, setBackgroundImage }}>
      {children}
    </BackgroundContext.Provider>
  );
}
