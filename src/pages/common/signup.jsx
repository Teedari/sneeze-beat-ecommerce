import { Button, Form, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import urls from "../../utils/routes/page.routes";
import AccountLayoutComponent from "./components/account-layout";

const SignUp = () => {
  return (
    <AccountLayoutComponent title='Register'>
      <Form layout="vertical" className="form">
        <Form.Item label="Fullname">
          <Input type="text" />
        </Form.Item>
        <Form.Item label="Username">
          <Input type="text" />
        </Form.Item>
        <Form.Item label="Email">
          <Input type="email" />
        </Form.Item>
        <Form.Item label="Password">
          <Input.Password />
        </Form.Item>
        <div className="flex justify-end">
          <Button className="btn btn-primary">
           <span className="text"> <i className="bx bx-right-arrow-alt"></i></span>
          </Button>
        </div>
      </Form>
      <p className="text-slate-400 text-center">
        Already have an account?
        <Link className="text-white px-1" to={urls.signin}>
          Sign in
        </Link>
      </p>
    </AccountLayoutComponent>
  );
};

export default SignUp;
