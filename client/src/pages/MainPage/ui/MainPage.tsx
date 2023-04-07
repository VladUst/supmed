import React from 'react';
import cls from './MainPage.module.scss';
import { ProcessAnamnesis } from '../../../features/ProcessAnamnesis';

import { EntitiesList, type EntityItem } from '../../../entities';
import { DiseasesDiagnostic } from '../../../features/DiseasesDiagnostic';
import { ResultNote } from '../../../features/ResultNote';
import { GPTRecommendations } from '../../../features/GPTRecommendations';
const items: EntityItem[] = [{
  name: 'cough',
  TUI: 'T047',
  info: {
    CUI: '215435435',
    originalName: 'dafasfas',
    definition: 'sfggfdhsdfhsfgsgsfggsdfgdfgdgdfgd'
  }
},
{
  name: 'back pain',
  TUI: 'T184',
  info: {
    CUI: '542',
    originalName: 'qerwetrqwtqwretwe',
    definition: 'zcxbzcvnxvvbzxcvczxcvzxcbxvvncvxbvxzcvxz'
  }
},
{
  name: 'Patient',
  TUI: 'T50',
  info: {
    CUI: '542',
    originalName: 'qerwetrqwtqwretwe',
    definition: 'zcxbzcvnxvvbzxcvczxcvzxcbxvvncvxbvxzcvxz'
  }
}
];
export const MainPage = () => {
  return (
      <main>
          <ProcessAnamnesis className={cls.anamnesisArea}/>
          <DiseasesDiagnostic className={cls.diagnosticArea}/>
          <GPTRecommendations className={cls.gptRecommendations}/>
          <ResultNote className={cls.noteForm} />
      </main>
  );
};
