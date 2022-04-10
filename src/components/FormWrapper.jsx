import { Form } from "antd";
import React from "react";
import CardWrapper from "./CardWrapper";

const FormWrapper = ({description, layout, form, onFinish, children}) => {
  return (
    <CardWrapper className='my-2'>
      <h5 className="py-4 capitalize">{description}</h5>
      <Form className='form' layout={layout} form={form} onFinish={onFinish}>
        {children}
      </Form>
    </CardWrapper>
  );
};

export default FormWrapper;
