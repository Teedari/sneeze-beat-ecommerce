import { Form, Select } from "antd";
import React from "react";

const PriceTag = () => {
  return (
    <Form.Item label='Price Tag' name='price_tag' rules={[{required: true, message: 'Price Tag field is cannot be empty'}]}>
      <Select>
        <Select.Option disabled>Select price tag</Select.Option>
        <Select.Option value='exclusive'>Exclusive</Select.Option>
        <Select.Option value='mp3'>MP3</Select.Option>
      </Select>
    </Form.Item>
  );
};

export default PriceTag;
