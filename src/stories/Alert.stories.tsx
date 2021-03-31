import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import Alert from "../components/alert/Alert";
import { AlertProps } from "../components/alert/Alert";
import styled from "styled-components";
export default {
  title: "Example/Alert",
  component: Alert,
} as Meta;

const Wrap = styled.div`
  margin: 10px;
  width: 300px;
`;
const Alert_default: Story<AlertProps> = (args) => (
  <>
    <Wrap>
      <Alert>default</Alert>
      <br />

      <Alert model="success">success</Alert>
      <br />

      <Alert model="danger">danger</Alert>
      <br />

      <Alert model="warning">warning</Alert>
    </Wrap>
  </>
);
export const AlertModel = Alert_default.bind({});
AlertModel.storyName = "基础样式";

const Alert_outline: Story<AlertProps> = (args) => (
  <>
    <Wrap>
      <Alert variant="outline">outline</Alert>
      <br />

      <Alert variant="outline" model="success">
        outline success
      </Alert>
      <br />

      <Alert variant="outline" model="danger">
        outline danger
      </Alert>
      <br />

      <Alert variant="outline" model="warning">
        outline warning
      </Alert>
    </Wrap>
  </>
);
export const AlertOutline = Alert_outline.bind({});
AlertOutline.storyName = "outline 模式";

const Alert_filled: Story<AlertProps> = (args) => (
  <>
    <Wrap>
      <Alert variant="filled">filled</Alert>
      <br />

      <Alert variant="filled" model="success">
        filled success
      </Alert>
      <br />

      <Alert variant="filled" model="danger">
        filled danger
      </Alert>
      <br />

      <Alert variant="filled" model="warning">
        filled warning
      </Alert>
    </Wrap>
  </>
);
export const AlertFilled = Alert_filled.bind({});
AlertFilled.storyName = "filled 模式";

const Alert_closed: Story<AlertProps> = (args) => (
  <>
    <Wrap>
      <Alert closed>default</Alert>
      <br />

      <Alert variant="filled" model="success" closed>
        filled success
      </Alert>
      <br />

      <Alert variant="outline" model="danger" closed>
        outline danger
      </Alert>
    </Wrap>
  </>
);
export const AlertClosed = Alert_closed.bind({});
AlertClosed.storyName = "closed属性设置消失效果";

const Alert_title: Story<AlertProps> = (args) => (
  <>
    <Wrap>
      <Alert title="hello world" model="success" closed>
        success
      </Alert>
      <br />

      <Alert variant="filled" model="danger" closed title="危险">
        filled danger
      </Alert>
      <br />

      <Alert variant="outline" model="warning" title="警告" closed>
        warning
      </Alert>
    </Wrap>
  </>
);
export const AlertTitle = Alert_title.bind({});
AlertTitle.storyName = "title属性定义标题";

const Alert_onClick: Story<AlertProps> = (args) => {
  return (
    <>
      <Wrap>
        <Alert
          title="hello world"
          model="success"
          onClick={() => {
            alert("hello");
          }}
        >
          only onClick
        </Alert>
        <br />

        <Alert
          title="hello world"
          model="danger"
          closed
          variant="filled"
          onClick={() => {
            alert("hello");
          }}
        >
          onClick + closed
        </Alert>
      </Wrap>
    </>
  );
};
export const AlertOnClick = Alert_onClick.bind({});
AlertOnClick.storyName = "onClick";

const Alert_style: Story<AlertProps> = (args) => {
  return (
    <>
      <Alert
        style={{ width: "250px" }}
        title="hello world"
        model="success"
        variant="outline"
        onClick={() => {
          alert("hello");
        }}
      >
        style属性
      </Alert>
    </>
  );
};
export const AlertStyle = Alert_style.bind({});
AlertStyle.storyName = "style属性";
