import React, { PropsWithChildren, useState } from "react";

export const ExampleContext = React.createContext([{}, () => {}] as any);

interface ExampleState {
  isExample: boolean;
}

export const ExampleProvider = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState<ExampleState>({ isExample: true });

  return (
    <ExampleContext.Provider value={[state, setState]}>
      {children}
    </ExampleContext.Provider>
  );
};
