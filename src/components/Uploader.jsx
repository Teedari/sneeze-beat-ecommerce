import {
  faFileUpload,
  faCloudUpload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Space, Progress, Input } from "antd";
import React, { useRef, useState } from "react";
import CardWrapper from "./CardWrapper";
import useStorage from "../utils/hooks/useStorage";
const Uploader = ({ path, supported_types=[], onSetUrl, label="" }) => {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const { progress } = useStorage({ path, file, onSetUrl, isUploading,  setIsUploading});
  /** functions */
  const fileOnChange = e => {
    const selected_file = e.target.files[0]
    if(supported_types.includes(selected_file.type)){
      setFile(selected_file)
      setFileError(null)
    }else{
      setFile(null)
      setFileError(`An error occured, File only support ${supported_types}`)
    }
  }
  
  return (
    <CardWrapper>
      <h4>{label}</h4>
      <br />
      <Input ref={fileInputRef} onChange={fileOnChange} type="file" hidden />
      <div className="flex md:flex-row md:justify-between items-center">
        <section className="flex flex-col gap-3">
          <Space>
            <Button
              onClick={() => fileInputRef.current?.input.click()}
              className="btn btn-secondary btn-sm text-white">
              <FontAwesomeIcon icon={faFileUpload} />
            </Button>
            {file && (
              <Button
                onClick={() => setIsUploading(true)}
                icon={<FontAwesomeIcon icon={faCloudUpload} />}
                className="btn btn-primary btn-sm text-white">
                <span className="px-3">upload</span>
              </Button>
            )}
          </Space>
          {file && (
            <p className="p-3 w-fit bg-dark-800 text-slate-400 rounded-lg">
              {file.name}
            </p>
          )}
          {fileError && (
            <p className="p-3 w-fit bg-dark-800 text-red-500 rounded-lg">
              {fileError}
            </p>
          )}
        </section>
        {isUploading && (
          <Progress
            type="dashboard"
            percent={progress}
            strokeColor="#fcb363"
            trailColor="rgba(0,0,0,0.4)"
            width={100}
          />
        )}
      </div>
    </CardWrapper>
  );
};

export default Uploader;
