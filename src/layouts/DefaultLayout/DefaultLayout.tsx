import React, { ReactNode } from 'react';
import { Header } from '../../components/Header/Header';
import './defaultLayout.scss';

interface DefaultLayoutProps {
  children: ReactNode;
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className='site'>
      <Header />
      <main className='main-content'>{children}</main>
    </div>
  );
};
