import { Button, Form, Input } from "antd";
import React from "react";
import AccountLayoutComponent from "./components/account-layout";

const SignUp = () => {
  return (
    <AccountLayoutComponent title='Register'>
      <Form layout="vertical" className="form">
        <Form.Item name='fullname' label="Fullname" rules={[{required: true}]}>
          <Input type="text" />
        </Form.Item>
        <Form.Item name='username' label="Username" rules={[{required: true}]}>
          <Input type="text" />
        </Form.Item>
        <Form.Item name='email' label="Email" rules={[{required: true}]}>
          <Input type="email" />
        </Form.Item>
        <Form.Item name='password' label="Password" rules={[{required: true}]}>
          <Input.Password />
        </Form.Item>
        <div className="flex justify-end">
          <Button htmlType="submit" className="btn btn-primary btn-sm">
           <span className="text"> <i className="bx bx-right-arrow-alt"></i></span>
          </Button>
        </div>
      </Form>
    </AccountLayoutComponent>
  );
};

export default SignUp;
