import { async } from "@firebase/util";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { faTrash, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Form, Input, message, Row, Tabs } from "antd";
import { sendEmailVerification } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardWrapper from "../../../components/CardWrapper";
import { actionCodeSettings, auth } from "../../../configs/firebase.config";
import CustomLayout from "../../../layouts";

const Settings = () => {
  const [loading, setLoading] = useState(false);
  const authState = useSelector((state) => state.auth.userInfo);
  const sendEmailVerificationLink = async () => {
    setLoading(true);
    sendEmailVerification(
      auth.currentUser,
      actionCodeSettings(authState?.email)
    )
      .then((res) => {
        console.log(res);
        setLoading(false);
        message.success("Email sent to ".concat(authState?.email));
      })
      .catch((err) => {
        message.error("Error occured. ".concat(err.message));
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    console.log(auth.currentUser?.emailVerified);
  }, []);

  return (
    <CustomLayout admin>
      <div className="heading">
        <h4>Settings</h4>
      </div>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Account" key="1">
          <div className="lg:w-1/2 pb-4">
            <CardWrapper>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-slate-600">
                  <div className="image-container rounded-full">
                    {authState?.photoUrl ? (
                      <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        alt=""
                      />
                    ) : (
                      <div className="w-full h-full center text-2xl animate-pulse">
                        <FontAwesomeIcon icon={faImage} />
                      </div>
                    )}
                  </div>
                </div>
                <Button className="border-0 bg-slate-900 text-primary h-12 w-12 rounded-full font-semibold hover:bg-transparent">
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
                <Button className="border-0 bg-slate-900 text-primary h-12 w-12 font-semibold hover:bg-transparent rounded-full">
                  <FontAwesomeIcon icon={faUpload} />
                </Button>
              </div>
              <hr className="border-slate-900 my-4" />
              <Form className="form" layout="vertical">
                <Form.Item label="Display name">
                  <Input value={authState?.username} disabled />
                </Form.Item>

                <Row gutter={[14]}>
                  <Col sm={24} md={12}>
                    <Form.Item label="Email address">
                      <Input value={authState?.email} />
                    </Form.Item>
                  </Col>
                  <Col sm={24} md={12}>
                    <Form.Item label="Phone number">
                      <Input value={authState?.phone} />
                    </Form.Item>
                  </Col>
                </Row>
                <div className="flex justify-end">
                  <Button className="btn btn-accent">Save changes</Button>
                </div>
              </Form>
            </CardWrapper>
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Password" key="2">
          <div className="lg:w-1/2 pb-4">
            <CardWrapper>
              <h4>Change password</h4>
              <hr className="border-slate-800 my-4" />
              <Form className="form" layout="vertical">
                <Form.Item label="Old password">
                  <Input.Password />
                </Form.Item>

                <Form.Item label="New password">
                  <Input.Password />
                </Form.Item>
                <Form.Item label="Confirm new password">
                  <Input.Password />
                </Form.Item>
                <small className="text-slate-400 mb-4 inline-block">
                  Make sure it's at least 15 characters OR at least 8 characters
                  including a number and a lowercase letter.
                </small>
                <div className="flex justify-end">
                  <Button htmlType="submit" className="btn btn-accent">
                    Save changes
                  </Button>
                </div>
              </Form>
            </CardWrapper>
          </div>
        </Tabs.TabPane>
        {!authState.isEmailVerified && (
          <Tabs.TabPane tab="Activation" key="3">
            <div className="lg:w-1/2 pb-4">
              <CardWrapper>
                <h4>Account Activation</h4>
                <hr className="border-slate-800 my-4" />
                <Form
                  onFinish={(values) => sendEmailVerificationLink()}
                  className="form"
                  layout="vertical">
                  <Form.Item label="User email">
                    <Input disabled type="email" value={authState?.email} />
                  </Form.Item>
                  <small className="text-slate-400 mb-4 inline-block">
                    Make sure it's your email thats is been displayed inside the
                    box.
                  </small>
                  <div className="flex justify-end">
                    <Button
                      loading={loading}
                      htmlType="submit"
                      className="btn btn-accent">
                      Activate account
                    </Button>
                  </div>
                </Form>
              </CardWrapper>
            </div>
          </Tabs.TabPane>
        )}
      </Tabs>
    </CustomLayout>
  );
};

export default Settings;
