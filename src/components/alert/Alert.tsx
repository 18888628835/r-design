import classnames from "classnames";
import React, {  useState } from "react";
import styled from "styled-components";
import "animate.css";
const Wrap = styled.div`
  /* 默认样式 */
  &.ale {
    display: flex;
    padding: 6px 16px;
    font-size: 15.75px;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.43;
    border-radius: 4px;
    transition: all 0.4s;
    justify-content: space-between;
  }
  &.ale-default {
    color: rgb(13, 60, 97);
    background-color: rgb(232, 244, 253);
  }
  &.ale-success {
    color: rgb(30, 70, 32);
    background-color: rgb(237, 247, 237);
  }
  &.ale-danger {
    color: rgb(97, 26, 21);
    background-color: rgb(253, 236, 234);
  }
  &.ale-warning {
    color: rgb(102, 60, 0);
    background-color: rgb(255, 244, 229);
  }
  &.ale-outline {
    background-color: transparent;
    border-style: solid;
    border-width: 2px;
  }
  &.ale-outline-default {
    color: rgb(13, 60, 97);
    border-color: #2196f3;
  }
  &.ale-outline-success {
    color: rgb(30, 70, 32);
    border-color: #4caf50;
  }
  &.ale-outline-warning {
    color: rgb(102, 60, 0);
    border-color: #ff9800;
  }
  &.ale-outline-danger {
    color: rgb(97, 26, 21);
    border-color: #f44336;
  }
  &.ale-filled {
    color: white;
  }
  &.ale-filled-default {
    background-color: #2196f3;
  }
  &.ale-filled-success {
    background-color: #4caf50;
  }
  &.ale-filled-warning {
    background-color: #ff9800;
  }
  &.ale-filled-danger {
    background-color: #f44336;
  }
  &.disabled {
    display: none;
  }
  .ale-closed {
    cursor: pointer;
    padding: 5px;
    font-size: 12px;
    transition: all 0.3s;
    &:hover {
      font-size: 14px;
    }
  }
  .ale-title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
  }
`;
export enum AlertType {
  Success = "success",
  Default = "default",
  Danger = "danger",
  Warning = "warning",
}
export enum AlertVariant {
  Outline = "outline",
  Fill = "filled",
}
export interface AlertProps {
  model: "success" | "default" | "danger" | "warning";
  children: React.ReactNode;
  className: string;
  variant: "outline" | "filled";
  closed: boolean;
  title: string;
  style: React.CSSProperties;
}
// 需要引入<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
 const Alert: React.FC<Partial<AlertProps>> = (props) => {
  const { model, children, className, variant, closed, title, style } = props;
  const [disabled, setDisabled] = useState<boolean>(false);
  const classes = classnames("ale", className, "animate__animated", {
    [`ale-${model}`]: model,
    [`ale-${variant}-${model}`]: variant,
    [`ale-${variant}`]: variant,
    animate__fadeOut: disabled,
  });

  return (
    <Wrap className={classes} style={style}>
      <span>
        {title && <div className="ale-title">{title}</div>}
        {children}
      </span>
      {closed && (
        <span>
          <span
            className="ale-closed"
            onClick={() => {
              setDisabled(true);
            }}
          >
            X
          </span>
        </span>
      )}
    </Wrap>
  );
};
Alert.defaultProps = { model: AlertType.Default };
export default Alert;