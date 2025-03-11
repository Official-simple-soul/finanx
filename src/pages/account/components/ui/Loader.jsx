import React from 'react';
import { CgSpinnerTwoAlt } from 'react-icons/cg';

function Loader() {
  return (
    <div className="fixed top-0 bottom-0 h-[100%] w-full z-50 flex items-center justify-center transition-all ease-in-out duration-500">
      <div className="bg-black opacity-40 absolute w-full h-screen transition-all ease-in-out duration-500"></div>
      <div className="h-screen w-full flex items-center justify-center">
        <CgSpinnerTwoAlt className="animate-spin text-[40px] md:text-[70px] text-pri" />
      </div>
    </div>
  );
}

export default Loader;
