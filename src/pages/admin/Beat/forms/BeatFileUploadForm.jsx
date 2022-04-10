import { Button } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import Uploader from "../../../../components/Uploader";


const BeatFileUploadForm = ({uploadedCoverUrl, uploadedBeatUrl, path=null}) => {
  const [beatUrl, setBeatUrl] = useState(null);
  const [beatCoverUrl, setBeatCoverUrl] = useState(null);

  const setUploadedUrls = useCallback(() => {
    uploadedBeatUrl(beatUrl)
    uploadedCoverUrl(beatCoverUrl)
  }, [beatCoverUrl, beatUrl, uploadedBeatUrl, uploadedCoverUrl])

  useEffect(() => {
    setUploadedUrls()
  }, [setUploadedUrls]);
  return (
    <>
      <Uploader
        path={path}
        label="Upload Beat"
        onSetUrl={setBeatUrl}
        supported_types={["audio/mpeg"]}
      />
      <br />
      <Uploader
        path={path}
        label="Upload Beat Image Cover"
        onSetUrl={setBeatCoverUrl}
        supported_types={["image/jpeg"]}
      />
      <br />
    </>
  );
};

export default BeatFileUploadForm;
