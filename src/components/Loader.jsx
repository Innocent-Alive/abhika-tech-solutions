import React from 'react';
import { DotLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full bg-primary">
      <DotLoader color="#97AE8E" size={60} />
    </div>
  );
};

export default Loader;
