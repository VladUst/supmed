import { memo } from 'react';
import { classNames } from '../../../shared';
import cls from './Navbar.module.scss';
interface NavbarProps {
  className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
  return (
      <header className={classNames(cls.Navbar, {}, [className])}>
          <a className={cls.logo} href="#">SupMed</a>
          <div className={cls.links}>
              <a href="#">Диагностика</a>
              <a href="#">История</a>
          </div>
      </header>
  );
});
