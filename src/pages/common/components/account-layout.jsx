import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useMemo } from "react";
import CustomLayout from "../../../layouts";
import Proptypes from 'prop-types'
import { Link, useMatch } from "react-router-dom";
import urls from "../../../utils/routes/page.routes";
// import accountSvg from '../../../assets/svgs/dua_lipa.svg'
const AccountLayoutComponent = ({children, title}) => {
  const match = useMatch(urls.signin)
  const displayInfo = useMemo(() => {
    if(match){
      return {title: 'Sign In To', info:"If you don't have an account", linkText: 'Register here!'}
    }
    return {title: 'Register With', info:"Alreay have an account with us", linkText: 'Sign in here!'} 
  }, [match])
  return (
    <CustomLayout hideFooter={true} hideHeader>
      <section className=" bg-center">
        <div className="container md:px-[8rem] flex items-center flex-col md:flex-row pt-8 md:pt-0 gap-4 min-h-screen ">
            <div className="flex-1 gap-4 flex justify-center flex-col">
              <h1>{displayInfo.title}<br /> <span className="text-primary">SneezeBeat</span></h1>
              <div className="flex">
                <p className="">{displayInfo.info} <br/>
                You can <Link to={urls.signup} className="text-cyan-300 font-semibold">{displayInfo.linkText}</Link>
                </p>
                <br/>
                <div className="w-80 h-80 md:block hidden  bg-account-svg bg-cover bg-center"></div>
              </div>
            </div>
            <div className="layout-mobile-container">
              <div className="flex gap-4 items-center">
                <Link to={'/'} className="btn btn-default">
                  <FontAwesomeIcon icon={faChevronLeft} />
                </Link>
                <h3 className="m-0 text-slate-500">{title}</h3>
              </div>
                {children}
            </div>
          </div>
      </section>
    </CustomLayout>
  );
};

AccountLayoutComponent.prototype = {
  title: Proptypes.string
}

AccountLayoutComponent.defaultProps = {
  title: 'no title'
}


export default AccountLayoutComponent;


