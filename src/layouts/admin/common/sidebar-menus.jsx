import React from "react";
import { Menu } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faCubes,
  faGears,
  faHeadset,
  faMessage,
  faMusic,
  faSignOut,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import urls from "../../../utils/routes/page.routes";
import CustomLink from "../../../components/CustomLink";
import useLogout from "../../../utils/hooks/useLogout";

const SidebarMenus = () => {
  const logout = useLogout()
  return (
    <Menu
      id="menu"
      className="custom-menu"
      theme="dark"
      mode="inline"
      defaultSelectedKeys={["1"]}>
      <Menu.Item className="" key="1" icon={<FontAwesomeIcon icon={faCubes} />}>
        <CustomLink to={urls.dashboard}>Dashboard</CustomLink>
      </Menu.Item>
      <Menu.Item
        key="2"
        className="custom-sub-menu"
        icon={<FontAwesomeIcon icon={faMusic} />}>
        <CustomLink to={urls.genre}>Genre</CustomLink>
      </Menu.Item>
      <Menu.SubMenu
        key="3"
        className="custom-sub-menu"
        icon={<FontAwesomeIcon icon={faHeadset} />}
        title="Beat">
        <Menu.Item key="3.1">
          {" "}
          <CustomLink to={urls.dashboard_beat_create}>Create</CustomLink>
        </Menu.Item>
        <Menu.Item key="3.2">
          {" "}
          <CustomLink to={urls.dashboard_beat_list}>List</CustomLink>
        </Menu.Item>
      </Menu.SubMenu>

      <Menu.Item
        className=""
        key="4"
        icon={<FontAwesomeIcon icon={faMessage} />}>
        <CustomLink to={urls.dashboard_messages}>Messages</CustomLink>
      </Menu.Item>
      <Menu.SubMenu title='User' key="5" icon={<FontAwesomeIcon icon={faUser} />}>
        <Menu.Item key='5.1'><CustomLink to={urls.dashboard_user}>List</CustomLink></Menu.Item>
        <Menu.Item key='5.2'><CustomLink to={urls.dashboard_user_create_admin}>Create Admin</CustomLink></Menu.Item>
      </Menu.SubMenu>
      <Menu.Item key="6" icon={<FontAwesomeIcon icon={faBook} />}>
        <CustomLink to={urls.dashboard_license}>License</CustomLink>
      </Menu.Item>
      <Menu.Item key="7" icon={<FontAwesomeIcon icon={faGears} />}>
        <CustomLink to={urls.dashboard_settings}>Settings</CustomLink>
      </Menu.Item>
      <Menu.Item key="8" onClick={logout} icon={<FontAwesomeIcon icon={faSignOut} />}>
        Logout
      </Menu.Item>
    </Menu>
  );
};

export default SidebarMenus;
