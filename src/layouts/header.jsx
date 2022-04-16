import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import urls from "../utils/routes/page.routes";
import PersistentStorage from "../utils/persistent_storage/storage.persistent";
import { Button } from "antd";
import useLogout from "../utils/hooks/useLogout";
const Header = () => {
  const logout = useLogout()
  const [toggleNavbar, setToggleNavbar] = useState(false);

  const navClass = toggleNavbar ? "navbar-nav active" : "navbar-nav";
  return (
    <nav className="navbar layout-header">
      <div className="logo ">
        <div className="w-40 h-16 bg-logo bg-cover bg-center"></div>
      </div>

      <button
        onClick={() => setToggleNavbar((prev, next) => !prev)}
        className="md:hidden">
        <FontAwesomeIcon icon={faAlignJustify} />
      </button>

      <div className={navClass}>
        <ul className="navbar-nav-menu">
          <li>
            <Link to={urls.homepage}>Home</Link>
          </li>
          <li>
            <Link to={urls.beat}>Beats</Link>
          </li>
          <li>
            <Link to={urls.contact}>Contact</Link>
          </li>
          <li className="hidden md:inline">
            <span className="border-l border-slate-700"></span>
          </li>
          <li className="flex gap-4 items-center justify-center flex-col mt-4 md:mt-0 md:justify-start md:flex-row">
            {!PersistentStorage.getUserHasLoggedIn() ? (
              <>
                {" "}
                <Link to={urls.signin} className="">
                  <span className="font-semibold">Sign in</span>
                </Link>
                <Link to={urls.signup} className="btn btn-primary">
                  Register
                </Link>
              </>
            ) : (
              <>
                <Button onClick={logout} to={urls.signup} className="btn btn-primary">
                  Logout
                </Button>
              </>
            )}
          </li>
        </ul>
        {/* <div className='flex gap-2 justify-center flex-col mt-4 md:mt-0 md:justify-start md:flex-row'>
            <Link to={urls.signin} className='btn btn-secondary'>Sign in</Link>
            <Link to={urls.signup} className='btn btn-primary'>Register</Link>
          </div> */}
      </div>
    </nav>
  );
};

export default Header;
