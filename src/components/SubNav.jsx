import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCubes } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from "react-router-dom";
const SubNav = ({title}) => {
  const location = useLocation()
  const loactionInitial = location.pathname.slice(1,2).toUpperCase()
  return (
    <nav className="bg-dark-300 py-2 px-2 rounded-full w-full flex justify-between items-center mt-8">
      <div className="w-12 h-12 border border-slate-700 rounded-full flex items-center justify-center font-bold bg-slate-800">
        {loactionInitial}
      </div>
      <h3 className="m-0 text-slate-300">{title || location.pathname}</h3>
      <div className="w-12 h-12 border border-slate-700 rounded-full flex items-center justify-center font-bold cursor-pointer bg-slate-800">
        <FontAwesomeIcon icon={faCubes} />
      </div>
    </nav>
  );
};

export default SubNav;
