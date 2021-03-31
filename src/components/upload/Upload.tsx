import React, { ChangeEvent, FC, useRef, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Button from "../button/Button";

export interface UploadFile {
  uid: string;
  size: number;
  name: string;
  status?: "ready" | "uploading" | "success" | "error";
  percent?: number;
  raw?: File;
  response?: any;
  error?: any;
}

export interface UploadProps {
  action?: string;
  beforeUpload?: (file: File) => boolean | Promise<File>;
  onProgress?: (percentage: number, file: File) => void;
  onSuccess?: (data: any, file: File) => void;
  onError?: (err: any, file: File) => void;
  onChange?: (file: File) => void;
}

const Wrap = styled.section``;
const Upload: FC<UploadProps> = (props) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const {
    action,
    onProgress,
    onSuccess,
    onError,
    beforeUpload,
    onChange,
  } = props;
  const fileInput = useRef<HTMLInputElement>(null); //获取到input表单元素

  //这个事件绑定在 Button 上来模拟点击 input 的上传按钮
  const handleClick = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };

  //这个事件为表单的 onchange 事件，可以获取到表单的 files
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files; //取到 fileList 对象
    if (!files) return null;
    console.log(files[0]);
    if (fileInput.current) {
      fileInput.current.value = "";
    }
  };

  return (
    <Wrap>
      <Button btnType="primary" onClick={handleClick}>
        上传文件
      </Button>
      <input
        onChange={handleChange}
        ref={fileInput}
        type="file"
        className="file-input"
      />
    </Wrap>
  );
};

export default Upload;
