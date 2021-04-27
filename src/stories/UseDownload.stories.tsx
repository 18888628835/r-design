/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import UseBlobDownload from "../components/useBlobDownload/UseBlobDownload";
import { UseBlobDownloadProps } from "../components/useBlobDownload/UseBlobDownload";
import "antd/dist/antd.css";
import { VerticalAlignBottomOutlined } from "@material-ui/icons";
export default {
  title: "Example/基于blob的下载",
  component: UseBlobDownload,
} as Meta;

const base_UseBlobDownload: Story<UseBlobDownloadProps> = args => {
  return (
    <>
      <UseBlobDownload axiosConfig={{ url: "" }}>自定义文字</UseBlobDownload>
    </>
  );
};
export const BaseUseBlobDownload = base_UseBlobDownload.bind({});
BaseUseBlobDownload.storyName = "自定义文字";

const iconHidden_UseBlobDownload: Story<UseBlobDownloadProps> = args => {
  return (
    <>
      <UseBlobDownload hiddenIcon axiosConfig={{ url: "" }}>
        导出
      </UseBlobDownload>
    </>
  );
};
export const IconHiddenUseBlobDownload = iconHidden_UseBlobDownload.bind({});
IconHiddenUseBlobDownload.storyName = "隐藏默认 icon";

const customIcon_UseBlobDownload: Story<UseBlobDownloadProps> = args => {
  return (
    <>
      <UseBlobDownload
        axiosConfig={{ url: "" }}
        icon={<VerticalAlignBottomOutlined />}
      >
        导出
      </UseBlobDownload>
    </>
  );
};
export const CustomIconUseBlobDownload = customIcon_UseBlobDownload.bind({});
CustomIconUseBlobDownload.storyName = "自定义icon";

const function_UseBlobDownload: Story<UseBlobDownloadProps> = args => {
  return (
    <div style={{ color: "#E9357F" }}>
      // 引入函数
      <br />
      <code
        dangerouslySetInnerHTML={{
          __html:
            'import {blobDownLoad} from "../components/useBlobDownload/UseBlobDownload"',
        }}
      ></code>
      <br />
      // 直接使用
      <br />
      <code>blobDownLoad(axiosConfig, method)</code>
    </div>
  );
};
export const FunctionUseBlobDownload = function_UseBlobDownload.bind({});
FunctionUseBlobDownload.storyName = "函数实现";
