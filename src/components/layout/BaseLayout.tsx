import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const BaseLayout: React.FC = (props) => {
  return (
    <div className="grid min-h-screen w-full grid-cols-1 md:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
      </div>
    </div>
  );
};

export default BaseLayout;