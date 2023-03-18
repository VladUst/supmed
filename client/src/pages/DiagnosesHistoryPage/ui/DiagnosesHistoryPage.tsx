import cls from './DiagnosesHistoryPage.module.scss';
import { useParams } from 'react-router-dom';
import React, { useCallback } from 'react';
import { type DiagnosisType } from '../../../entities/ICDDiagnosis/model/types';
import { DiagnosisCard } from '../../../entities/ICDDiagnosis';
import { List, useFetch } from '../../../shared';
import axios from 'axios';
import { PageLoader } from '../../../widgets/PageLoader/PageLoader';
const diagnoses: DiagnosisType[] = [{
  date: '2023-03-17T16:38:29.244854Z',
  doctor: 'Orlov',
  symptoms: 'hoarseness, cough, stridor',
  diagnosis: 'croup',
  description: 'diagnosis - croup',
  icd_code: 'J05.0'
}, {
  date: '2023-03-17T16:38:29.244854Z',
  doctor: 'Doc',
  symptoms: 'cough, stridor',
  diagnosis: 'croup',
  description: 'croup diagnosed',
  icd_code: 'J05.0'
}];
export const DiagnosesHistoryPage = () => {
  const { block } = useParams();
  const [diagnoses, isLoading, error] = useFetch<DiagnosisType>(fetchChapters);
  async function fetchChapters () {
    const url = `http://127.0.0.1:8000/api/diagnoses-list/${block as string}/`;
    return await axios.get<DiagnosisType[]>(url);
  }
  function processDate (dateStr: string) {
    const [date, time] = dateStr.split('T');
    return `${date}, ${time.slice(0, 5)}`;
  }
  const renderCard = useCallback((item: DiagnosisType) =>
      <DiagnosisCard
          diagnosis={item.diagnosis}
          icd_code={item.icd_code}
          symptoms={item.symptoms}
          description={item.description}
          doctor={item.doctor}
          date={processDate(item.date)}
          key={item.date}
            />,
  []);

  if (isLoading) {
    return <PageLoader/>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
      <main>
          {<List items={diagnoses} renderItem={renderCard}/>}
      </main>
  );
};
