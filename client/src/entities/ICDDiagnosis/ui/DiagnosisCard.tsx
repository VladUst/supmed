import { memo } from 'react';
import cls from './DiagnosisCard.module.scss';
import { classNames } from '../../../shared';

interface DiagnosisCardProps {
  className?: string
  date: string
  doctor: string
  symptoms: string
  diagnosis: string
  description: string
  icd_code: string
}
export const DiagnosisCard = memo((props: DiagnosisCardProps) => {
  const { date, doctor, description, symptoms, diagnosis, icd_code, className } = props;
  return (
      <div className={classNames(cls.DiagnosisCard, {}, [className])}>
          <div className={cls.wrapper}>
              <h4>{diagnosis}</h4>
              <p>{icd_code}</p>
          </div>
          <p><span>Symptoms: </span>{symptoms}</p>
          {description && <p><span>Description: </span>{description}</p>}
          <div className={cls.wrapper}>
              <p><span>Doctor: </span>{doctor}</p>
              <p>{date}</p>
          </div>
      </div>
  );
});
