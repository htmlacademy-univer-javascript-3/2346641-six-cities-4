import { FC, ReactNode } from 'react';
import cn from 'classnames';

interface PageProps {
  children: ReactNode;
  name?: string;
}

export const Page: FC<PageProps> = ({ children, name }) => {
  return (
    <main className={cn('page__main', name && `page__main--${name}`)}>
      {children}
    </main>
  );
};
