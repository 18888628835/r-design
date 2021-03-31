import styled from "styled-components";
export const Wrap = styled.div`
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
