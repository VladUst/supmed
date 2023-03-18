import { Link, type LinkProps } from 'react-router-dom';
import { type ReactNode } from 'react';
import { classNames } from '../../lib/classNames';
import cls from './AppLink.modules.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
  children?: ReactNode
}

export const AppLink = (props: AppLinkProps) => {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;
  return (
      <Link to={to}
              className={classNames(cls.AppLink, {}, [className, cls[theme]])}
              {...otherProps}>
          {children}
      </Link>
  );
};
