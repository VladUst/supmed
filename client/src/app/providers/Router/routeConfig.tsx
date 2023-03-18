import { type RouteProps } from 'react-router-dom';
import { MainPage } from '../../../pages/MainPage';
import { ChaptersHistoryPage } from '../../../pages/ChaptersHistoryPage';
import { BlocksHistoryPage } from '../../../pages/BlocksHistoryPage';
import { DiagnosesHistoryPage } from '../../../pages/DiagnosesHistoryPage';

export const RoutePath: Record<string, string> = {
  main: '/',
  chapters: '/chapters',
  blocks: '/blocks/',
  diagnoses: '/diagnoses/',
  notfound: '*'
};

export const routeConfig: Record<string, RouteProps> = {
  main: {
    path: RoutePath.main,
    element: <MainPage/>
  },
  chapters: {
    path: RoutePath.chapters,
    element: <ChaptersHistoryPage/>
  },
  blocks: {
    path: RoutePath.blocks + ':chapter',
    element: <BlocksHistoryPage/>
  },
  diagnoses: {
    path: RoutePath.diagnoses + ':block',
    element: <DiagnosesHistoryPage/>
  },
  notfound: {
    path: RoutePath.notfound,
    element: <MainPage/>
  }
};
