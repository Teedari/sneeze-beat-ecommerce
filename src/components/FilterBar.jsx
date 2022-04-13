import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { beatGoTo } from "../utils/helpers";
import urls from "../utils/routes/page.routes";
import SearchBar from "./SearchBar";

const FilterBar = ({params}) => {
  const inActiveClass = 'text-slate-200 capitalize font-bold text-slate-200 capitalize font-bold'
  const activeClass = 'border bg-dark-700 border-primary text-primary px-2 py-1 rounded-full'


  return (
    <nav className="md:bg-dark-400 gap-4 rounded-full py-2 px-2 flex items-center justify-between flex-col md:flex-row">
      <ul className="flex gap-4 m-0 flex-wrap pl-2">
        <li>
          <Link
            className={params.getAll('query').includes('all') || params.getAll('query').length === 0  ? activeClass : inActiveClass}
            to={beatGoTo('all')}>
            All beats
          </Link>
        </li>
        <li>
          <Link 
            className={params.getAll('query').includes('drill') ? activeClass : inActiveClass} 
            to={beatGoTo('drill')}>
            drill
          </Link>
        </li>
        <li>
          <Link 
             className={params.getAll('query').includes('hip_pop') ? activeClass : inActiveClass}  
             to={beatGoTo('hip pop')}>
            hip pop
          </Link>
        </li>
        <li>
          <Link 
            className={params.getAll('query').includes('afro_pop') ? activeClass : inActiveClass}
            to={beatGoTo('afro pop')}>
            afro pop
          </Link>
        </li>
        <li>
          <Link 
            className={params.getAll('query').includes('r_and_b') ? activeClass : inActiveClass} 
            to={beatGoTo('R&B')}>
            {"R&B"}
          </Link>
        </li>
      </ul>
      <SearchBar />
    </nav>
  );
};

export default FilterBar;
