import cn from 'classnames';
import type { FC, ReactNode } from 'react';

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

Page.displayName = 'Page';
