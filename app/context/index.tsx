"use client";

import { createContext, useState, useContext } from "react";

const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  let [boxAttributes, setBoxAttributes] = useState({ size: 1 });
  return (
    <AppContext.Provider value={{ boxAttributes, setBoxAttributes }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
