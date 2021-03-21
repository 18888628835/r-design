import classnames from "classnames";
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import styled from "styled-components";
const Wrap = styled.button`
  /* Button默认样式 */
  &.btn {
    color: rgba(0, 0, 0, 0.87);
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
      0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    position: relative;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-size: 15.75px;
    display: inline-block;
    font-weight: 500;
    line-height: 1.75;
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    padding: 4px 15px;
    margin: 8px;
    transition: all 0.3s;
    border: none;
    border-radius: 4px;
  }
  /* default样式 */
  &.btn-default {
    background-color: #e0e0e0;
    &:hover {
      background-color: #d5d5d5;
      box-shadow: 2px 4px -1px rgb(0 0 0 / 20%),
        0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
    }
  }
  /* primary样式 */
  &.btn-primary {
    background-color: #1976d2;
    &:hover {
      background-color: rgb(17, 82, 147);
    }
  }
  /* danger 样式 */
  &.btn-danger {
    background-color: rgb(220, 0, 78);
    &:hover {
      background-color: rgb(154, 0, 54);
    }
  }
  /* disabled样式 */
  &:disabled {
    color: rgba(0, 0, 0, 0.26);
    background-color: rgba(0, 0, 0, 0.12);
    cursor: not-allowed;
    :hover {
      background-color: rgba(0, 0, 0, 0.12);
    }
  }
  /*primary，danger 公共字体颜色 */
  &.btn-primary,
  &.btn-danger {
    color: white;
  }
  /* outline下的样式 */
  &.btn-outline {
    box-shadow: none;
    border: 1px solid rgba(0, 0, 0, 0.23);
    background-color: white;
    &.btn-default {
      &:hover {
        background-color: rgba(0, 0, 0, 0.04);
      }
    }
    &.btn-primary {
      color: #1976d2;
      border: 1px solid rgba(25, 118, 210, 0.5);
      &:hover {
        background-color: rgba(25, 118, 210, 0.04);
      }
    }
    &.btn-danger {
      color: rgb(220, 0, 78);
      border: 1px solid rgba(220, 0, 78, 0.5);
      &:hover {
        background-color: rgba(220, 0, 78, 0.04);
      }
    }
    &:disabled {
      border: 1px solid rgba(0, 0, 0, 0.12);
      &:hover {
        background-color: white;
      }
    }
  }
  &.btn-small {
    padding: 4px 10px;
    font-size: 14.62px;
  }
  &.btn-large {
    padding: 7px 21px;
    font-size: 16.87px;
  }
`;
const WrapA = styled.span`
  color: #1976d2;
  display: inline-block;
  padding: 6px 8px;
  vertical-align:middle;
  a{
    text-decoration:none;
  }
  cursor:default;
  &:hover {
    background-color: rgba(25, 118, 210, 0.04);
  }
`;
// 支持 primary、default、danger、link四种样式
// export enum ButtonType {
//   Primary = "primary",
//   Default = "default",
//   Danger = "danger",
//   Link = "link",
// }
export type ButtonType="primary"|"default"|"danger"|
"link"
// 支持两种大小
// export enum ButtonSize {
//   Large = "large",
//   Small = "small",
// }
export type ButtonSize="large"|"small"
// 外边框模式
// export enum ButtonOutLine {
//   OutLine = "outline",
// }
export type ButtonOutLine='outline'
// API
interface BaseButtonProps {
  className: string;
  disabled: boolean;
  size: ButtonSize;
  btnType: ButtonType;
  children: React.ReactNode;
  href: string;
  variant: ButtonOutLine;
}
//Partial 的作用就是可以将某个类型里的属性全部变为可选项 ?
export type ButtonProps = Partial<
  BaseButtonProps &
    // React提供的元素属性
    ButtonHTMLAttributes<HTMLButtonElement> &
    AnchorHTMLAttributes<HTMLAnchorElement>
>;
 const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    disabled,
    size,
    btnType,
    children,
    href,
    variant,
    ...restProps
  } = props;
  // 默认为btn, 根据传入的BaseButtonProps可变成btn-primary,btn-large等
  const classes = classnames("btn", {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    [`btn-${variant}`]: variant,
    disabled: btnType === 'link' && disabled,
    [className!]: className,
  });
  if (btnType === 'link') {
    return (
      <WrapA>
        <a
          href={href}
          className={classes}
          {...restProps}
          target="_blank"
          rel="noreferrer"
        >
          {children}
        </a>
      </WrapA>
    );
  } else {
    return (
      <Wrap className={classes} disabled={disabled} {...restProps}>
        <span>{children}</span>
      </Wrap>
    );
  }
};
// 默认的 props
Button.defaultProps = { disabled: false, btnType: 'default' };
export default Button