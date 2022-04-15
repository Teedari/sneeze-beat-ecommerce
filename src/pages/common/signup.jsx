import { Button, Form, Input } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import authSignUpThunk from "../../state_management/thunks/auth/auth.signup.thunk";
import { HttpStatus } from "../../state_management/types";
import AccountLayoutComponent from "./components/account-layout";

const SignUp = () => {
  const [form] = Form.useForm()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const authState = useSelector( state => state.auth)
  const onFinish = values => {
    dispatch(authSignUpThunk({
      formData: values,
      navigate
    }))
  }
  return (
    <AccountLayoutComponent title='Register'>
      <Form form={form} onFinish={onFinish} layout="vertical" className="form">
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
          <Button htmlType="submit" loading={authState.fetchingState === HttpStatus.PENDING} className="btn btn-primary btn-sm">
          submit <span className="text"> <i className="bx bx-right-arrow-alt"></i></span>
          </Button>
        </div>
      </Form>
    </AccountLayoutComponent>
  );
};

export default SignUp;
