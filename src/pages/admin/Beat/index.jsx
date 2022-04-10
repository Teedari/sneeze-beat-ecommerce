import { Tabs, Form, Button, Space } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomLayout from "../../../layouts";
import beatCreateThunk from "../../../state_management/thunks/beat/beat.create.thunk";
import BeatBasicForm from "./forms/BeatBasicForm";
import BeatFileUploadForm from "./forms/BeatFileUploadForm";
import {HttpStatus} from '../../../state_management/types.js'
import CardWrapper from "../../../components/CardWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTable, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import urls from "../../../utils/routes/page.routes";

const Beat = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [formOneCompleted, setFormOneCompleted] = useState(false)
  const [activeKey, setActiveKey] = useState("1");
  const [beatUrl, setBeatUrl] = useState(null)
  const [beatCoverUrl, setBeatCoverUrl] = useState(null)
  const  beatState = useSelector( state => state.beat)


  /*** functions */
  const onFinish = (values) => {
    onChangeTab(2);
    setFormOneCompleted(true)
  };

  const onChangeTab = (key) => {
    setActiveKey(key.toString());
  };

  const createNewBeat = () => {
    const data = {...form.getFieldsValue(), coverUrl:beatCoverUrl, beatUrl: beatUrl}
    dispatch(beatCreateThunk(data)).unwrap()
    .then( success => {
      form.resetFields()
      setBeatUrl(null)
      setBeatCoverUrl(null)
      onChangeTab(3);
      setFormOneCompleted(false)
    })
  }
  return (
    <CustomLayout admin>
      <div className="heading">
        <h4>Beat Creation</h4>
      </div>
      <Tabs
        activeKey={activeKey}
        defaultActiveKey={activeKey}
        onChange={onChangeTab}>
        <Tabs.TabPane tab="Basic Beat Information" key="1">
          <BeatBasicForm label='Create Beat Form' createForm update form={form} onFinish={onFinish} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Beat File Upload" key="2" disabled={!formOneCompleted}>
          <BeatFileUploadForm path={form.getFieldValue('path')} uploadedCoverUrl={setBeatCoverUrl} uploadedBeatUrl={setBeatUrl} />
          {beatUrl && beatCoverUrl && (
            <div className="flex justify-center">
              <Button loading={beatState.sendingState === HttpStatus.PENDING} className="btn btn-primary" onClick={createNewBeat}>
                Submit
              </Button>
            </div>
          )}
        </Tabs.TabPane>
        <Tabs.TabPane tab="Completed" key="3" disabled>
            <CardWrapper className='flex flex-col items-center gap-4 w-full'>
              <div className="w-32 h-32 rounded-full flex items-center justify-center bg-dark-400"><FontAwesomeIcon className="text-3xl text-primary animate-pulse" icon={faThumbsUp} /></div>
              <h2>Successfully Created</h2>
              <Space>
                <Button className="btn btn-secondary" onClick={() => onChangeTab(1)}>Create New Beat</Button>
                <Button onClick={() =>  navigate(urls.dashboard_beat_list)} icon={<FontAwesomeIcon icon={faTable} />}  className="btn btn-primary btn-sm">View</Button>
              </Space>
            </CardWrapper>
        </Tabs.TabPane>
      </Tabs>
    </CustomLayout>
  );
};

export default Beat;
