
import { getDownloadURL, uploadBytesResumable, ref } from "firebase/storage";
import { bucket } from "../../configs/firebase.config";
import { useCallback, useState, useEffect } from "react";
import { message } from "antd";

const useStorage = ({
  path,
  file,
  isUploading,
  setIsUploading,
  onSetUrl = (url) => {
    console.log(`Downloaded URL ${url}`);
  },
}) => {

  const [progress, setProgress] = useState(0);

  const uploadFile = useCallback(() => {
    const storageRef = path !== null ? ref(bucket,`${path}/${file.name}`) : ref(bucket, file.name)
    console.log(path , storageRef)
    const uploadTask = uploadBytesResumable(storageRef, file);
    console.log("START UPLOADING!!!");
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setIsUploading(true);
          setProgress(parseInt(progress));
        // console.log(progress)
      },
      (error) => {
        // Handle unsuccessful uploads
        message.error("Error Occurred beat was not uploaded, Try again");
        setIsUploading(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          onSetUrl(downloadURL);
          setIsUploading(false);
        });
        setIsUploading(false);
      }
    );
  }, [file, onSetUrl, path, setIsUploading]);

  useEffect(() => {
    if (isUploading) {
      uploadFile();
    }
  }, [ isUploading, uploadFile]);
  return {
    progress,
  };
};

export default useStorage;
