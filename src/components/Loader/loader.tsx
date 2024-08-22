import React from "react";
import { BiLoaderCircle } from "react-icons/bi";


const Loader = ():React.JSX.Element => {
  return (
    <div className="text-[300px] animate-spin items-center justify-center text-bice-blue" data-testid="loader">
     <BiLoaderCircle/>
    </div>
  );
};

export default Loader;