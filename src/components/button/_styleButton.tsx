import styled from "styled-components";

export const Wrap = styled.button`
  --base-color: rgba(0, 0, 0, 0.87);
  --default-bg-color: #e0e0e0;
  --primary-bg-color: #1976d2;
  --danger-bg-color: rgb(220, 0, 78);
  --disabled-bg-color: rgba(0, 0, 0, 0.12);
  --default-hover-bg-color: #d5d5d5;
  --primary-hover-bg-color: rgb(17, 82, 147);
  --danger-hover-bg-color: rgb(154, 0, 54);
  --disabled-color: rgba(0, 0, 0, 0.26);
  --outline-default-bg-color: rgba(0, 0, 0, 0.04);
  --outline-primary-bd-color: rgba(25, 118, 210, 0.5);
  --outline-default-bd-color: rgba(0, 0, 0, 0.23);
  --outline-hover-bg-color: rgba(25, 118, 210, 0.04);
  --outline-danger-bd-color: rgba(220, 0, 78, 0.5);
  --outline-danger-bg-color: rgba(220, 0, 78, 0.04);
  /* Button默认样式 */
  &.btn {
    color: var(--base-color);
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
    overflow: hidden;
  }
  /* default样式 */
  &.btn-default {
    background-color: var(--default-bg-color);
    &:hover {
      background-color: var(--default-hover-bg-color);
      box-shadow: 2px 4px -1px rgb(0 0 0 / 20%),
        0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
    }
  }
  /* primary样式 */
  &.btn-primary {
    background-color: var(--primary-bg-color);
    &:hover {
      background-color: var(--primary-hover-bg-color);
    }
  }
  /* danger 样式 */
  &.btn-danger {
    background-color: var(--danger-bg-color);
    &:hover {
      background-color: var(--danger-hover-bg-color);
    }
  }
  /* disabled样式 */
  &:disabled {
    color: var(--disabled-color);
    background-color: var(--disabled-bg-color);
    cursor: not-allowed;
    :hover {
      background-color: var(--disabled-bg-color);
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
    border: 1px solid var(--outline-default-bd-color);
    background-color: white;
    &.btn-default {
      &:hover {
        background-color: var(--outline-default-bg-color);
      }
    }
    &.btn-primary {
      color: var(--primary-bg-color);
      border: 1px solid var(--outline-primary-bd-color);

      &:hover {
        background-color: var(--outline-hover-bg-color);
      }
    }

    &.btn-danger {
      color: var(--danger-bg-color);
      border: 1px solid var(--outline-danger-bd-color);
      &:hover {
        background-color: var(--outline-danger-bg-color);
      }
    }
    &:disabled {
      border: 1px solid var(--disabled-bg-color);
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
  .wave {
    position: absolute;
    animation: wave 0.6s linear;
    transition: all 0.6s;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    opacity: 0.4;
    border-radius: 50%;
    background-color: white;
  }
  @keyframes wave {
    0% {
      transform: scale(0);
    }

    50% {
      transform: scale(10);
    }

    100% {
      transform: scale(25);
    }
  }
`;

export const WrapA = styled.span`
  color: #1976d2;
  display: inline-block;
  padding: 6px 8px;
  vertical-align: middle;
  a {
    text-decoration: none;
  }
  cursor: default;
  &:hover {
    background-color: rgba(25, 118, 210, 0.04);
  }
`;
