import { Button, Col, Form, Input, Row, Space, message } from "antd";
import React from "react";
import CustomTable from "../../../components/table.custom";
import CustomLayout from "../../../layouts";
import CardWrapper from "../../../components/CardWrapper";
import { useDispatch, useSelector } from "react-redux";
import genreCreateThunk from "../../../state_management/thunks/genre.thunk";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import genreDeleteThunk from "../../../state_management/thunks/genre/genre.delete.thunk";
import HttpStatus from '../../../utils/HttpStatus'
const Genre = () => {
  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Description", dataIndex: "description", key: "description" },
    {
      title: "Action",
      dataIndex: "key",
      key: "key",
      render: (_, record) => {
        return (
          <Space size="large">
            <div className="bg-transparent border-0 focus-within:bg-tranaprent focus:bg-tranaprent cursor-pointer text-red-300">
              <FontAwesomeIcon
                icon={faTrash}
                onClick={() => deleteGenre(record.key)}
              />
            </div>
          </Space>
        );
      },
    },
  ];
  const [form] = Form.useForm(null);
  const dispatch = useDispatch();
  const genreState = useSelector((state) => state.genre);

  const onFinish = (values) => {
    createGenre(values);
  };

  const createGenre = (values) => {
    const data = { name: values?.name, description: values?.description };
    dispatch(genreCreateThunk({ data, form }));
  };

  const deleteGenre = (key) => {
    dispatch(genreDeleteThunk({ key }))
      .unwrap()
      .then((success) => {
        message.success(
          "Genre with ID: #ID deleted successfully".replace("#ID", key)
        );
      })
      .catch((err) => {
        message.error("Genre was not deleted, Try again!!");
      });
  };
  return (
    <CustomLayout admin>
      <div className="heading">
        <h4>Genre</h4>
      </div>
      <Row gutter={[18, 14]}>
        <Col sm={24} md={12}>
          <CardWrapper>
            <h5 className="py-4">Create New Genre</h5>
            <Form className="form" form={form} onFinish={onFinish}>
              <Form.Item name="name" rules={[{ required: true }]}>
                <Input placeholder="Enter name...." />
              </Form.Item>
              <Form.Item name="description">
                <Input.TextArea rows={9} placeholder="Enter description...." />
              </Form.Item>
              <Button htmlType="submit" loading={genreState.fetchingState  === HttpStatus.PENDING} className="btn btn-primary float-right">
                Create Genre
              </Button>
              <div className="clear-both"></div>
            </Form>
          </CardWrapper>
        </Col>
        <Col sm={24} md={12}>
          <CustomTable
            pagination={{ pageSize: 5 }}
            description="List of genres"
            columns={columns}
            dataSource={genreState.list}
          />
        </Col>
      </Row>
    </CustomLayout>
  );
};

export default Genre;
