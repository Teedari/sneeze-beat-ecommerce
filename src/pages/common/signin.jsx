import { Button, Form, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import urls from "../../utils/routes/page.routes";
import AccountLayoutComponent from "./components/account-layout";

const SignIn = () => {
  return (
    <AccountLayoutComponent title='Sign In'>
      <Form layout="vertical" className="form">
        <Form.Item label="Email">
          <Input type="email" />
        </Form.Item>
        <Form.Item label="Password">
          <Input.Password />
        </Form.Item>
        <div className="flex justify-end">
          <Button className="btn btn-primary">
            <i className="bx bx-right-arrow-alt"></i>
          </Button>
        </div>
      </Form>
      <p className="text-slate-400 text-center">
        Dont have an account? 
        <Link className="text-white px-1" to={urls.signup}>
          Sign up
        </Link>
      </p>
    </AccountLayoutComponent>
  );
};

export default SignIn;
