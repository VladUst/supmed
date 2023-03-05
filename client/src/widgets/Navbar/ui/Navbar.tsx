import { memo } from 'react';
import { classNames } from '../../../shared';
import cls from './Navbar.module.scss';
interface NavbarProps {
  className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
  return (
      <header className={classNames(cls.Navbar, {}, [className])}>
      </header>
  );
});
