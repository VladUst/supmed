import cls from './SectionCard.module.scss';
import { AppLink } from '../../../shared/ui/AppLink/AppLink';
import { memo } from 'react';
interface SectionCardProps {
  className?: string
  name: string
  description: string
  nextPage: string
}
export const SectionCard = memo((props: SectionCardProps) => {
  const { name, description, nextPage } = props;
  return (
      <AppLink to={nextPage} className={cls.SectionCard}>
          <h4>{name}</h4>
          <p>{description}</p>
      </AppLink>
  );
});
