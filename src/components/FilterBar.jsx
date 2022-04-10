import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import urls from "../utils/routes/page.routes";
import SearchBar from "./SearchBar";

const FilterBar = () => {
  const inActiveClass = 'text-slate-200 capitalize font-bold text-slate-200 capitalize font-bold'
  const activeClass = 'border bg-dark-700 border-primary text-primary px-2 py-1 rounded-full'
  const [params] = useSearchParams()
  console.log(params.getAll('query'))

  const beatGoTo= param => ({pathname: urls.beat, search: `?query=${param}`})
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
             className={params.getAll('query').includes('hippop') ? activeClass : inActiveClass}  
             to={beatGoTo('hippop')}>
            hip pop
          </Link>
        </li>
        <li>
          <Link 
            className={params.getAll('query').includes('afropop') ? activeClass : inActiveClass}
            to={beatGoTo('afropop')}>
            afro pop
          </Link>
        </li>
        <li>
          <Link 
            className={params.getAll('query').includes('raggae') ? activeClass : inActiveClass} 
            to={beatGoTo('raggae')}>
            raggae
          </Link>
        </li>
      </ul>
      <SearchBar />
    </nav>
  );
};

export default FilterBar;
