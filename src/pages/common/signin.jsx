import { Button, Form, Input, Spin } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import authSignInThunk from "../../state_management/thunks/auth/auth.signin.thunk";
import { HttpStatus } from "../../state_management/types";
import AccountLayoutComponent from "./components/account-layout";
import { doc, getDoc } from 'firebase/firestore'
import { auth, db } from '../../configs/firebase.config'

const SignIn = () => {
  const [form] = Form.useForm()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const authState = useSelector( state => state.auth)
  const onFinish = values => {
    dispatch(authSignInThunk({formData: values, navigate: navigate}))
  }
  useEffect(() => {
    const getUser = async () => {
      try{
        const data = await getDoc(doc(db, 'tb_user_profile', 'LxC9rnYxPuStsCUH0D4moh3Cc9H3'));
        console.log(data.data())

      }catch(err) {
        console.log(err.code)
      }
    }


  })
  
  return (
    <Spin spinning={authState.fetchingState === HttpStatus.PENDING}>
      <AccountLayoutComponent title='Sign In'>
        <Form form={form}  onFinish={onFinish} layout="vertical" className="form">
          <Form.Item name='email' label="Email" rules={[{required: true}]}>
            <Input type="email" />
          </Form.Item>
          <Form.Item name='password' label="Password" rules={[{required: true}]}>
            <Input.Password />
          </Form.Item>
          <div className="flex justify-end">
            <Button loading={authState.fetchingState === HttpStatus.PENDING} htmlType="submit" className="btn btn-primary btn-sm">Sign in
              <i className="bx bx-right-arrow-alt"></i>
            </Button>
          </div>
        </Form>
        <p className="underline decoration-cyan-200 text-cyan-300 text-center font-semibold">or continue with</p>
        <Button  block className="btn btn-secondary btn-sm center " ><i class='bx bxl-google'></i><span>oogle</span></Button>

      </AccountLayoutComponent>
    </Spin>
  );
};

export default SignIn;
