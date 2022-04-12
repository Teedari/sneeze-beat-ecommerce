import { Button, Form, Input } from "antd";
import React from "react";
import AccountLayoutComponent from "./components/account-layout";

const SignIn = () => {
  return (
    <AccountLayoutComponent title='Sign In'>
      <Form layout="vertical" className="form">
        <Form.Item name='email' label="Email" rules={[{required: true}]}>
          <Input type="email" />
        </Form.Item>
        <Form.Item name='password' label="Password" rules={[{required: true}]}>
          <Input.Password />
        </Form.Item>
        <div className="flex justify-end">
          <Button htmlType="submit" className="btn btn-primary btn-sm">
            <i className="bx bx-right-arrow-alt"></i>
          </Button>
        </div>
      </Form>
      <p className="underline decoration-cyan-200 text-cyan-300 text-center font-semibold">or continue with</p>
      <Button block className="btn btn-secondary btn-sm center " ><i class='bx bxl-google'></i><span>oogle</span></Button>

    </AccountLayoutComponent>
  );
};

export default SignIn;
