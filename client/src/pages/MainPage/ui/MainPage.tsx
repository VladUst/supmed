import React from 'react';
import cls from './MainPage.module.scss';
import { ProcessAnamnesis } from '../../../features/ProcessAnamnesis';

export const MainPage = () => {
  return (
      <main>
          <ProcessAnamnesis className={cls.anamnesisArea}/>
      </main>
  );
};
