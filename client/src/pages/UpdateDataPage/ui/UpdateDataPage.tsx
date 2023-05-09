import { Button, List } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Text } from '../../../shared';
import cls from './UpdateDataPage.module.scss';
import { type ICDSectionType } from '../../../entities/ICDDiagnosis';
import { DiagnosticTablesList } from '../../../entities/DiagnosticTable';
import { type ICDListItemType } from '../../../entities/DiagnosticTable/model/types';
interface UpdateDataLabel {
  title: string
  data: string
}
const UpdateData = (label: UpdateDataLabel) => {
  return (
      <div className={cls.updateData}>
          <Text title={label.title} text={label.data} align={'center'}/>
          <div className={cls.btnWrapper}>
              <Button
                  variant="contained"
                  endIcon={<FileDownloadIcon/>}
              >
                  Скачать
              </Button>
              <Button
                  variant="contained"
                  component="label"
                  className={cls.updateBtn}
                  endIcon={<UploadFileIcon/>}
              >
                  Обновить
                  <input
                      type="file"
                      hidden
                  />
              </Button>
          </div>
      </div>
  );
};

const items: ICDListItemType[] = [
  {
    name: 'I',
    description: 'Некоторые инфекционные и паразитарные болезни'
  },
  {
    name: 'II',
    description: 'Новообразования'
  },
  {
    name: 'III',
    description: 'Болезни крови, кроветворных органов и отдельные нарушения, вовлекающие иммунный механизм'
  },
  {
    name: 'IV',
    description: 'Болезни эндокринной системы, расстройства питания и нарушения обмена веществ',
    blocks: [
      {
        name: 'E00-E07',
        description: 'Болезни щитовидной железы'
      },
      {
        name: 'E10-E14',
        description: 'Сахарный диабет'
      },
      {
        name: 'E15-E16',
        description: 'Другие нарушения регуляции глюкозы и внутренней секреции поджелудочной железы'
      },
      {
        name: 'E20-E35',
        description: 'Нарушения других эндокринных желез'
      },
      {
        name: 'E40-E46',
        description: 'Недостаточность питания'
      },
      {
        name: 'E50-E64',
        description: 'Другие виды недостаточности питания'
      },
      {
        name: 'E65-E68',
        description: 'Ожирение и другие виды избыточности питания'
      },
      {
        name: 'E70-E90',
        description: 'Нарушения обмена веществ'
      }
    ]
  },
  {
    name: 'V',
    description: 'Психические расстройства и расстройства поведения'
  },
  {
    name: 'VI',
    description: 'Болезни нервной системы'
  },
  {
    name: 'VII',
    description: 'Болезни глаза и его придаточного аппарата'
  }
];
export const UpdateDataPage = () => {
  return (
      <main className={cls.UpdateDataPage}>
          <UpdateData title={'Датасет первичной диагностики'}
                      data={'145 заболеваний и 400 симптомов'}/>
          <UpdateData title={'Онтология первичной диагностики'}
                      data={'150 заболеваний и 90 симптомов'}/>
          <List>
              <Text title={'Таблицы диагностики'} align={'center'}/>
              {items?.map((item) => (
                  <DiagnosticTablesList key={item.name} item={item} />
              ))}
          </List>
      </main>
  );
};
