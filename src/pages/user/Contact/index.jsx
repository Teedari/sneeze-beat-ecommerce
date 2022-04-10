import {
  faLocation,
  faMailBulk,
  faMobilePhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Form, Input, message, Row } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SubNav from "../../../components/SubNav";
import CustomLayout from "../../../layouts";
import messageCreateThunk from "../../../state_management/thunks/message/message.create.thunk";
import { HttpStatus } from "../../../state_management/types";

const ContactUs = () => {
  const dispatch = useDispatch()
  const messageState = useSelector( state => state.message)
  const [form] = Form.useForm();
  const onFinish = (values) => {
    dispatch(messageCreateThunk(values)).unwrap()
    .then( success => {
      message.success('Message sent, Thank you for reaching us!!')
      form.resetFields()
    })
  };
  
  return (
    <CustomLayout>
      <section className="container">
        <SubNav title="Contact" />
        <div className="py-8">
          <Row className="flex items-center">
            <Col md={12} className="w-ful">
              <h3 className="text-3xl text-slate-100 font-semibold">
                Get a quote
              </h3>
              <p className="text-md text-slate-500">
                Fill up the form and our Team will get back <br />
                to you within 24 hours
              </p>
              <ul className="py-8">
                <li className="border border-transparent cursor-pointer hover:bg-dark-300 hover:border-primary rounded-lg max-w-[280px] px-4 py-3 flex gap-4 items-center">
                  <FontAwesomeIcon
                    icon={faMobilePhone}
                    className="text-primary text-xl"
                  />
                  <span className="text-slate-400">+233 24 744 0223</span>
                </li>
                <li className="border border-transparent cursor-pointer hover:bg-dark-300 hover:border-primary rounded-lg max-w-[280px] px-4 py-3 flex gap-4 items-center">
                  <FontAwesomeIcon
                    icon={faMailBulk}
                    className="text-primary text-xl"
                  />
                  <span className="text-slate-400">dari@test.com</span>
                </li>
                <li className="border border-transparent cursor-pointer hover:bg-dark-300 hover:border-primary rounded-lg max-w-[280px] px-4 py-3 flex gap-4 items-center">
                  <FontAwesomeIcon
                    icon={faLocation}
                    className="text-primary text-xl"
                  />
                  <span className="text-slate-400">Ghana, Tarkwa</span>
                </li>
              </ul>
            </Col>
            <Col md={12} className="w-full">
              <Form
                form={form}
                layout="vertical"
                className="form"
                onFinish={onFinish}>
                <Form.Item
                  label="Your Name"
                  name='name'
                  rules={[
                    { required: true, message: "Name field cannot be empty" },
                  ]}>
                  <Input />
                </Form.Item>
                <Form.Item 
                  label="Email"
                  name='email'
                  rules={[
                    { required: true, message: "Email field cannot be empty" },
                  ]}>
                  <Input type='email' />
                </Form.Item>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Message field cannot be empty",
                    },
                  ]}
                  label="Message"
                  name='message'
                  >
                  <Input.TextArea rows={8} />
                </Form.Item>
                <div className="float-right">
                  <Button loading={messageState.fetchingState === HttpStatus.PENDING } htmlType="submit" className="btn btn-primary">
                    Send Message
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </div>
      </section>
    </CustomLayout>
  );
};

export default ContactUs;
