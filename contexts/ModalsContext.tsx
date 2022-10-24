import React, { PropsWithChildren, useState } from "react";

export const ModalsContext = React.createContext([{}, () => {}] as any);

interface ModalsState {
  harvestsOpen: boolean;
}

export const ModalsProvider = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState<ModalsState>({ harvestsOpen: false });

  return (
    <ModalsContext.Provider value={[state, setState]}>
      {children}
    </ModalsContext.Provider>
  );
};
