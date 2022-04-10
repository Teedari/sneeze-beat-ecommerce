import {
  faHeadphones,
  faHeadphonesAlt,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Form, Input, List, Row } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomizedCardWrapper from "../../../components/CustomizedCardWrapper";
import FormWrapper from "../../../components/FormWrapper";
import PriceTag from "../../../components/PriceTag";
import CustomTable from "../../../components/table.custom";
import CustomLayout from "../../../layouts";
import licenseFetchThunk from "../../../state_management/thunks/license/license.fetch.thunk";
import licenseCreateThunk from "../../../state_management/thunks/message/license.create.thunk";
import { HttpStatus } from "../../../state_management/types";

const License = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const licenseState = useSelector((state) => state.license);
  const onFinish = (values) => {
    dispatch(licenseCreateThunk(values))
    .unwrap().then( success => {
      form.resetFields()
    })
  };

// exercitation nulla. Fugiat reprehenderit ut anim cupidatat reprehenderit. Duis Lorem fugiat laboris cillum aliquip consectetur.
  
  useEffect(() => {
    dispatch(licenseFetchThunk())
  }, [dispatch])
  return (
    <CustomLayout admin>
      <Row gutter={[14]} className="mb-4">
        <Col sm={24} md={12}>
          <FormWrapper
            description="Create New License"
            layout="vertical"
            form={form}
            onFinish={onFinish}>
            <PriceTag />
            <Form.Item
              name="license_content"
              label="License Content"
              rules={[
                { required: true, message: "Content field cannot be empty" },
              ]}>
              <Input.TextArea rows={6} />
            </Form.Item>
            <div className="flex justify-end">
              <Button loading={!licenseState.sendingState === HttpStatus.FULFILLED} htmlType='submit' className="btn btn-primary">Submit</Button>
            </div>
          </FormWrapper>
        </Col>
        <Col sm={24} md={12}>
          <h4>All Licenses</h4>
          <List
            pagination={{
              pageSize:2
            }}
            dataSource={licenseState.list}
            renderItem={(item) => (
              <CustomizedCardWrapper className='mb-4'>
                <span className="text-slate-500 text-center text-2xl capitalize">
                  {item.price_tag}
                </span>
                <p className="px-8 text-clip">
                  <div className="w-32 h-32 rounded-full flex items-center justify-center bg-dark-300 mr-4 float-left">
                    <FontAwesomeIcon icon={faHeadphones} className="text-3xl" />
                  </div>
                  {item.license_content}
                </p>
              </CustomizedCardWrapper>
            )}></List>
        </Col>
      </Row>
    </CustomLayout>
  );
};

export default License;
