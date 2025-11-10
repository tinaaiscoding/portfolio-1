;
import { Dispatch, SetStateAction } from 'react';

export type PhraseContextType = {
  phrase: string;
};

export type CaseStudyContextType = {
  caseStudy: CaseStudy;
  setCaseStudy: Dispatch<SetStateAction<{ active: boolean; index: number }>>;
};

export type CaseStudy = {
  active: boolean;
  index: number;
};
