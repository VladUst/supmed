import React, { useCallback } from 'react';
import cls from './BlocksHistoryPage.module.scss';
import { useParams } from 'react-router-dom';
import { RoutePath } from '../../../app/providers/Router/routeConfig';
import { List, useFetch } from '../../../shared';
import { type ICDSectionType } from '../../../entities/ICDDiagnosis/model/types';
import axios from 'axios';
import { SectionCard } from '../../../entities/ICDDiagnosis';
import { PageLoader } from '../../../widgets/PageLoader/PageLoader';
export const BlocksHistoryPage = () => {
  const { chapter } = useParams();
  const [blocks, isLoading, error] = useFetch<ICDSectionType>(fetchChapters);
  async function fetchChapters () {
    const url = `http://127.0.0.1:8000/api/blocks-list/${chapter as string}/`;
    return await axios.get<ICDSectionType[]>(url);
  }
  const renderCard = useCallback((item: ICDSectionType) =>
      <SectionCard
                name={item.name}
                description={item.description}
                nextPage={RoutePath.diagnoses + item.name}
                key={item.name}
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
          {<List items={blocks} renderItem={renderCard}/>}
      </main>
  );
};
