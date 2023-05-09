import { memo } from 'react';
import { classNames } from '../../../shared';
import cls from './Navbar.module.scss';
import { AppLink } from '../../../shared/ui/AppLink/AppLink';
import { RoutePath } from '../../../app/providers/Router/routeConfig';
interface NavbarProps {
  className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
  return (
      <header className={classNames(cls.Navbar, {}, [className])}>
          <a className={cls.logo} href="#">SupMed</a>
          <div className={cls.links}>
              <AppLink to={RoutePath.main}>Диагностика</AppLink>
              <AppLink to={RoutePath.chapters}>История</AppLink>
              <AppLink to={RoutePath.update}>Обновить данные</AppLink>
          </div>
      </header>
  );
});
