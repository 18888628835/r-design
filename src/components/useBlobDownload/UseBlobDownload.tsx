import { ExportOutlined } from "@ant-design/icons";
import { ButtonProps, message } from "antd";
import { Button } from "antd";
import axios, { Method } from "axios";
import React, { FC } from "react";

export interface axiosConfigType {
  url: string;
  [key: string]: any;
}

export interface UseBlobDownloadProps extends ButtonProps {
  axiosConfig: axiosConfigType; //axiosConfig see:https://github.com/axios/axios
  icon?: React.ReactNode; //自定义 icon
  method?: Method;
  hiddenIcon?: boolean;
}
//二进制文档流下载
export async function blobDownLoad(
  axiosConfig: axiosConfigType,
  method: Method = "get"
) {
  const { url, ...rest } = axiosConfig;

  const origin = window.location.origin; //获取域名和端口号
  const DEV = origin.includes("localhost") || origin.includes("192.168.9"); //个人 IP
  let ENV = DEV ? "/api" : ""; //判断环境变量,开发环境的proxy下需要加/api

  try {
    const response = await axios({
      baseURL: `${origin}${ENV}`,
      url,
      responseType: "blob",
      method,
      ...rest,
    });

    // 设置文件名,从返回头中的content-disposition属性中取 fileName
    if (response.data) {
      const fileName = response.headers["content-disposition"]
        ?.split(";")[1]
        ?.split("=")?.[1];
      const _url = window.URL.createObjectURL(response.data);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = _url;
      //文件名需要解码
      a.download = decodeURI(fileName);
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(_url);
      document.body.removeChild(a);
      message.success("下载成功");
    } else {
      message.error("下载失败");
    }
  } catch (error) {
    console.log(error);
  }
}

//二进制文档流下载
const UseBlobDownload: FC<UseBlobDownloadProps> = props => {
  const {
    axiosConfig,
    hiddenIcon,
    method = "get",
    onClick,
    icon,
    children,
    ...rest
  } = props;

  let defaultIcon = <ExportOutlined style={{ marginRight: "8px" }} />;
  if (hiddenIcon) {
    defaultIcon = <span></span>;
  }
  const onHandleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    blobDownLoad(axiosConfig, method);

    onClick && onClick(event);
  };
  return (
    <Button htmlType="submit" {...rest} onClick={onHandleClick}>
      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
        {icon ? (
          <span
            style={{
              marginRight: "8px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {icon}
          </span>
        ) : (
          defaultIcon
        )}
        <span>{children}</span>
      </div>
    </Button>
  );
};

export default UseBlobDownload;
