import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Layout } from "antd";
import { useEffect, useState } from "react";
import useMediaQuery from "../../utils/hooks/useSize";
import HeaderDashboard from "./common/header.dashboard";
import SidebarMenus from "./common/sidebar-menus";

import Logo from '../../assets/brand/logo.png'

const AdminLayout = ({ children }) => {
  const mediaQuery = useMediaQuery()
  const [ collapsed , setCollapsed] = useState(false)

  const onCollapse = () => {
    setCollapsed((prev, next) => !prev)
  };
  useEffect(() => {
    if(mediaQuery.screen === 'md' || mediaQuery.screen === 'sm'){
      setCollapsed(true)
    }else{
      setCollapsed(false)
    }
  },[mediaQuery.screen])
  return (
    <Layout hasSider id="layout-admin" className={ collapsed ? 'active' :''}>
      <Layout.Sider id="layout-admin-sidebar" collapsed={collapsed}>
        <div className="">
          <img src={Logo}  alt="" />
        </div>
        <SidebarMenus />
        <button className=" hidden w-12 h-12 border border-slate-700 absolute bottom-0 mx-auto left-0 right-0 mb-4  rounded-full bg-dark-700" onClick={() => onCollapse()}><FontAwesomeIcon icon={faAlignLeft} /></button>
      </Layout.Sider>
      <Layout id="layout-admin-container">
        <Layout.Header id="layout-admin-header">
          <HeaderDashboard />
        </Layout.Header>
        <Layout.Content id="layout-admin-content"><main className="container pt-4">{children}</main></Layout.Content>
        <Layout.Footer id="layout-admin-footer">FOOTER</Layout.Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
