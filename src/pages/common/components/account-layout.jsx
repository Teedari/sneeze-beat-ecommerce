import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CustomLayout from "../../../layouts";
import Proptypes from 'prop-types'
import { Link } from "react-router-dom";
// import accountSvg from '../../../assets/svgs/dua_lipa.svg'
const AccountLayoutComponent = ({children, title}) => {
  return (
    <CustomLayout hideFooter={true} hideHeader={true}>
      <section className="bg-account-svg bg-contain bg-no-repeat bg-center">
        <div className="container flex justify md:justify-end w-full min-h-screen items-center">
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


