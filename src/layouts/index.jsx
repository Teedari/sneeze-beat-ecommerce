import { Layout } from "antd";
import React from "react";
import Footer from "./footer";
import Header from "./header";
import PropTypes from "prop-types";
import FloatActionButtons from "../components/FloatActionButtons";
import AdminLayout from "./admin";
import { useLocation } from "react-router-dom";
import urls from "../utils/routes/page.routes";





const UserLayout = ({ children, hideFooter, hideHeader }) => {
  const location = useLocation()
  const floatActionButtonMiddleWare = urls => {
    if(!urls.includes(location.pathname)){
      return <FloatActionButtons />
    }
  }
  return (
    <Layout id="layout-user" className="layout-user">
      {floatActionButtonMiddleWare([urls.contact])}
      {hideHeader || <Header />}
      <div className="layout-content">
        <div className="">
          {children}
        </div>
      </div>
      {hideFooter || <Footer />}
    </Layout>
  );
};

const CustomLayout = ({ children, hideFooter, hideHeader, admin }) => {

  if (admin) {
    return <AdminLayout>{children}</AdminLayout>;
  }
  return (
    <UserLayout hideFooter={hideFooter} hideHeader={hideHeader}>
      {children}
    </UserLayout>
  );
};

CustomLayout.propTypes = {
  hideFooter: PropTypes.bool,
  hideHeader: PropTypes.bool,
};

CustomLayout.defaultProps = {
  hideFooter: false,
  hideHeader: false,
};

export default CustomLayout;
