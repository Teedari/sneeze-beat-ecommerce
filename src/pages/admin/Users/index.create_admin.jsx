import { Button, Form, Input } from "antd";
import React from "react";
import FormWrapper from "../../../components/FormWrapper";
import CustomLayout from "../../../layouts";
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import UserProfile from "../../../models/User";
import authSignUpThunk from "../../../state_management/thunks/auth/auth.signup.thunk";
import { HttpStatus } from "../../../state_management/types";

const UserAdminCreate = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const authState = useSelector( state => state.auth)

  const createAdminUser = (values) => {
    dispatch(authSignUpThunk({navigate, formData: values, role: UserProfile.ADMIN_ROLE}))
  };
  return (
    <CustomLayout admin>
      <div className="heading">
        <h4>Create New Admin</h4>
      </div>
      <FormWrapper description='Create User Admin' layout="vertical" form={form} onFinish={createAdminUser}>
        <Form.Item
          label="Username"
          name="username"
          placeholder="Enter username"
          rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          placeholder="Enter email"
          rules={[{ required: true }]}>
          <Input type="email" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          placeholder="Enter password"
          rules={[{ required: true }]}>
          <Input.Password />
        </Form.Item>
        <Button loading={HttpStatus.PENDING === authState.fetchingState}  htmlType="submit" className="btn btn-primary">
          <span>Create Genre</span>
        </Button>
      </FormWrapper>
    </CustomLayout>
  );
};

export default UserAdminCreate;
