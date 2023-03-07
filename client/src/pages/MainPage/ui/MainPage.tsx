import React from 'react';
import cls from './MainPage.module.scss';
import { ProcessAnamnesis } from '../../../features/ProcessAnamnesis';
import { EntitiesList } from '../../../widgets/EntitiesList';
import { type EntityItem } from '../../../entities';
import { DiseasesDiagnostic } from '../../../features/DiseasesDiagnostic';
import { ResultNote } from '../../../features/ResultNote';

const items: EntityItem[] = [
  {
    name: 'cough',
    TUI: '047',
    info: {
      CUI: '215435435',
      originalName: 'dafasfas',
      definition: 'sfggfdhsdfhsfgsgsfggsdfgdfgdgdfgd'
    }
  },
  {
    name: 'back pain',
    TUI: '080',
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
          <EntitiesList items={items}/>
          <DiseasesDiagnostic className={cls.diagnosticArea}/>
          <ResultNote />
      </main>
  );
};
