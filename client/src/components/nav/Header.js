import React, { useState } from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  UserAddOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const { SubMenu, Item } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("home");
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const handleClick = (e) => {
    //console.log(e.key)
    setCurrent(e.key);
  };

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    navigate("/login");
  };
  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Item key="home" icon={<HomeOutlined />}>
        <Link to="/">Home</Link>
      </Item>
      <SubMenu key="SubMenu" icon={<SettingOutlined />} title="User">
        <Item key="setting:1">Option 1</Item>
        <Item icon={<UserOutlined />} onClick={logout}>
          Logout{" "}
        </Item>
      </SubMenu>

      <Item key="login" icon={<UserOutlined />} style={{ marginLeft: "auto" }}>
        <Link to="/login">Login</Link>
      </Item>

      <Item key="register" icon={<UserAddOutlined />}>
        <Link to="/register">Register</Link>
      </Item>
    </Menu>
  );
};

export default Header;
