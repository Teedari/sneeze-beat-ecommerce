import { Button, Form, Input } from "antd";
import React from "react";
import FormWrapper from "../../../components/FormWrapper";
import CustomLayout from "../../../layouts";

const UserAdminCreate = () => {
  const [form] = Form.useForm();
  const createAdminUser = (values) => {};
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
        <Button  htmlType="submit" className="btn btn-primary">
          <span>Create Genre</span>
        </Button>
      </FormWrapper>
    </CustomLayout>
  );
};

export default UserAdminCreate;
