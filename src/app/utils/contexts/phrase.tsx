import React, { createContext, useContext } from 'react';

import type {
  PhraseContextType,
} from '../types';

export const PhraseContext = createContext<PhraseContextType | undefined>(
  undefined,
);

export const PhraseProvider: React.FC<{
  children: React.ReactNode;
  context: PhraseContextType;
}> = ({ children, context }) => {
  return (
    <PhraseContext.Provider value={context}>{children}</PhraseContext.Provider>
  );
};

export function usePhraseContext() {
  const context = useContext(PhraseContext);

  if (!context)
    throw new Error(
      'usePhraseContext must be used with PhraseContext Provider',
    );

  return context;
}
