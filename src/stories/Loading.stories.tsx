import React, { useState } from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import Loading from "../components/loading/Loading";
import { LoadingProps } from "../components/loading/Loading";
import styled from "styled-components";
import Switch from "../components/switch/Switch";
import "../App.css";
import Alert from "../components/alert/Alert";
export default {
  title: "Example/loading",
  component: Loading,
} as Meta;

const Loading_default: Story<LoadingProps> = (args) => {
  return (
    <>
      <Loading flag={true}></Loading>
    </>
  );
};
export const LoadingDefault = Loading_default.bind({});
LoadingDefault.storyName = "基础样式";

const Loading_title: Story<LoadingProps> = (args) => {
  return (
    <>
      <Loading flag={true} title="加载中..."></Loading>
    </>
  );
};
export const LoadingTitle = Loading_title.bind({});
LoadingTitle.storyName = "自定义标题";

const Loading_style: Story<LoadingProps> = (args) => {
  const [flag, setFlag] = useState(true);
  return (
    <>
      <Loading flag={flag} title="加载中...">
        <Alert>
          这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字
        </Alert>
      </Loading>
      <br />
      <br />
      <br />
      <Switch
        onChange={() => {
          setFlag(!flag);
        }}
      />
    </>
  );
};
export const LoadingStyle = Loading_style.bind({});
LoadingStyle.storyName = "遮罩效果";
