import React, { memo, useState } from 'react';
import { Button, TextField } from '@mui/material';
import DiagnosticIcon from '@mui/icons-material/Settings';
import cls from './DiseasesDiagnostic.module.scss';
import { type ChipData, ChipsArray } from '../../../shared/ui/ChipsArray/ChipsArray';
import { type DiseaseType } from '../model/types';
import { classNames, Text } from '../../../shared';

const resultDiseases: DiseaseType[] = [{ name: 'ostehondros' }, { name: 'osteoporos' }, { name: 'illnes' }];
interface DiseasesDiagnosticProps {
  className?: string
}

export const DiseasesDiagnostic = memo((props: DiseasesDiagnosticProps) => {
  const { className } = props;
  const [text, setText] = useState<string>('');
  const [symptoms, setSymptoms] = useState<ChipData[]>([]);

  const deleteSymptom = (symptomToDelete: ChipData) => () => {
    setSymptoms((symptoms) => symptoms.filter((symptom) => symptom.label !== symptomToDelete.label));
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.endsWith(',') || value.endsWith(';')) {
      setSymptoms([...symptoms, { label: text }]);
      setText('');
    } else {
      setText(e.target.value);
    }
  };

  function handleSubmit (e: React.MouseEvent<HTMLButtonElement>) {
    const symptomsArray = symptoms.map(symptom => symptom.label);
    console.log(symptomsArray);
    // fetch('/some-api', { method: form.method, body: formData });
  }

  return (
      <>
          <form className={classNames(cls.DiseasesDiagnostic, {}, [className])}
            method="post"
          >
              <label>Перечислите симптомы через запятую:</label>
              <TextField value={text}
                     onChange={handleInput}
                     label="Симптомы"
                     variant="standard" />
              <ChipsArray data={symptoms} deleteHandler={deleteSymptom}/>
              <div className={cls.btns}>
                  <Button
                      variant="contained"
                      endIcon={<DiagnosticIcon/>}
                      onClick={handleSubmit}
                  >
                      Диагностика
                  </Button>
              </div>
          </form>
          <div className={cls.result}>
              <Text title={'Результаты диагностики: '} />
              <ul>
                  {resultDiseases.map((disease) => (
                      <li key={disease.name}>
                          {disease.name}
                      </li>)
                  )}
              </ul>
          </div>
      </>
  );
});
