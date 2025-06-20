import React from 'react';
import { DotLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full bg-primary">
      <DotLoader color="#F4A261" size={60} />
    </div>
  );
};

export default Loader;
