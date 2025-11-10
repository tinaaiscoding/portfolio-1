import { useLenis } from 'lenis/react';
import React, { createContext, useContext, useEffect, useState } from 'react';

import type {
  CaseStudy,
  CaseStudyContextType,
  PhraseContextType,
} from './types';

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

const CaseStudyContext = createContext<CaseStudyContextType | undefined>(
  undefined,
);

export const CaseStudyProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const lenis = useLenis();
  const [caseStudy, setCaseStudy] = useState<CaseStudy>({
    active: false,
    index: 1,
  });

  const contextValue = { caseStudy, setCaseStudy };

  // Global side effect: stop/start Lenis scroll based on caseStudy.active - so we put this in this in Provider Component
  useEffect(() => {
    if (caseStudy.active) lenis?.stop();
    else lenis?.start();
  }, [caseStudy, lenis]);

  return (
    <CaseStudyContext.Provider value={contextValue}>
      {children}
    </CaseStudyContext.Provider>
  );
};

export function useCaseStudyContext() {
  const context = useContext(CaseStudyContext);

  if (!context)
    throw new Error(
      'useCaseStudyContext must be used with CaseStudyContext Provider',
    );

  return context;
}
