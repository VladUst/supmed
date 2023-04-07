import cls from './ChaptersHistoryPage.module.scss';
import { type ICDSectionType } from '../../../entities/ICDDiagnosis/model/types';
import { List, useFetch } from '../../../shared';
import { SectionCard } from '../../../entities/ICDDiagnosis';
import { useCallback } from 'react';
import { RoutePath } from '../../../app/providers/Router/routeConfig';
import axios from 'axios';
import { PageLoader } from '../../../widgets/PageLoader/PageLoader';
const chapters: ICDSectionType[] = [{
  name: 'X',
  description: 'Diseases of the respiratory system'
}, {
  name: 'III',
  description: 'fdasfsdfasdfadfasdfasdfasdfsfsdffdasfsdfasdf'
}];
export const ChaptersHistoryPage = () => {
  const [chapters, isLoading, error] = useFetch<ICDSectionType>(fetchChapters);
  async function fetchChapters () {
    return await axios.get<ICDSectionType[]>('http://127.0.0.1:8000/api/chapters-list/');
  }
  const renderCard = useCallback((item: ICDSectionType) =>
      <SectionCard
                name={'Chapter ' + item.name}
                description={item.description}
                nextPage={RoutePath.blocks + item.name}
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
          <List items={chapters} renderItem={renderCard}/>
      </main>
  );
};
