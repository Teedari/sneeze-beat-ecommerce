import React, { useState, useCallback } from "react";
import { Select, Form, Input, Button, Radio, Row, Col } from "antd";
import FormWrapper from "../../../../components/FormWrapper";
import random from "random-number";
import { useSelector } from "react-redux";
import { HttpStatus } from "../../../../state_management/types";
import genreData from "../../../../data/genre.json";

const arr = ["GAD2112", "GAD1344", "HGA1239"];
const BeatBasicForm = ({ ...props }) => {
  // const [name, setName] = useState("sdaf");
  const [paths, setPaths] = useState(null);

  const generateFullPath = useCallback((generate_paths, name) => {
    const rand = () => {
      const limit = 5;
      const new_path_name = name.replaceAll(" ", "").slice(0, limit);
      const new_path_figures = random({ min: 1000, max: 999999, integer: true })
        .toString()
        .slice(0, limit);
      return `${new_path_name}${new_path_figures}`;
    };
    let value = rand();
    while (arr.includes(value) || generate_paths.includes(value)) {
      value = rand();
    }

    return value;
  }, []);

  const generator = useCallback(
    (name) => {
      const len = 3;
      const generated = [];
      for (let i = 0; i < len; i++) {
        generated.push(generateFullPath(generated, name));
      }
      return generated;
    },
    [generateFullPath]
  );

  const onChangeName = (e) => {
    const val = e.target.value;
    if (val === "") {
      setPaths(null);
      return;
    }
    setPaths(generator(val));
    // setDefaultPathValue(paths[0])
  };
  /** Update Form stuffs */
  const beatState = useSelector((state) => state.beat);
  return (
    <FormWrapper
      {...props}
      layout="vertical"
      className="mb-2"
      description={props.label || ""}>
      <Form.Item
        name="name"
        label="Name"
        rules={[{ required: true, message: "Name field is required" }]}>
        <Input placeholder="beat name goes here ..." onChange={onChangeName} />
      </Form.Item>
      {props.createForm && paths && (
        <Form.Item
          name="path"
          rules={[
            {
              required: true,
              message: "You need to select one of these paths",
            },
          ]}>
          <Radio.Group>
            {paths.map((path, key) => (
              <Radio.Button key={key} value={path}>
                {path.toUpperCase()}
              </Radio.Button>
            ))}
          </Radio.Group>
        </Form.Item>
      )}
      <Row gutter={[14]}>
        <Col md={12}>
          <Form.Item
            name="genre"
            label="Genre"
            rules={[{ required: true, message: "Genre field is required" }]}>
            <Select defaultValue="">
              <Select.Option disabled>Select genre type</Select.Option>
              {genreData.map((genre) => (
                <Select.Option value={genre.label.toLowerCase()}>{genre?.label}</Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col md={12}>
          <Form.Item
            name="category"
            label="Category"
            rules={[{ required: true, message: "Category field is required" }]}>
            <Select defaultValue="">
              <Select.Option disabled>Select Category</Select.Option>
              <Select.Option value="recommended">Recommended</Select.Option>
              <Select.Option value="trending">Trending</Select.Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        name="bpm"
        label="Beat Per Minute(bpm)"
        className="flex-1"
        rules={[{ required: true, message: "BPM field is required" }]}>
        <Input type="number" />
      </Form.Item>
      <Row gutter={[14]}>
        <Col sm={24} md={12}>
          <Form.Item
            name="general_price"
            label="MP3 (Price)"
            className="flex-1"
            rules={[{ required: true, message: "Price field is required" }]}>
            <Input type="number" />
          </Form.Item>
        </Col>
        <Col sm={24} md={12}>
          <Form.Item
            name="exclusive_price"
            label="Exclusive (Price)"
            className="flex-1"
            rules={[{ required: true, message: "Price field is required" }]}>
            <Input type="number" />
          </Form.Item>
        </Col>
      </Row>
      <div className="flex justify-end">
        {props.createForm && (
          <Button
            htmlType="submit"
            className="btn btn-primary"
            loading={beatState.sendingState === HttpStatus.PENDING}>
            Continue
          </Button>
        )}

        {props.updateForm && (
          <Button
            loading={beatState.sendingState === HttpStatus.PENDING}
            htmlType="submit"
            className="btn btn-primary">
            Update
          </Button>
        )}
      </div>
    </FormWrapper>
  );
};

export default BeatBasicForm;
