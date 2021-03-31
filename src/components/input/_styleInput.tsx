import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  .viking-ipt {
    display: flex;
    align-items: center;
    line-height: 1.5;
    padding: 6.75px 13.5px;
    border: 1px solid #d9d9d9;
    vertical-align: bottom;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    font-size: 14px;
  }
  .ipt {
    outline: none;
    border: none;
    padding: 4px 7px;
  }
  //获得焦点的样式
  .viking-ipt:focus {
    border-color: #40a9ff;
    outline: 0;
    box-shadow: 0 0 0 2px rgb(24 144 255 / 20%);
  }
  .viking-ipt-large {
    padding: 9px 18px;
  }
  .viking-ipt-small {
    padding: 4.5px 9px;
  }
  .addon-before,
  .addon-after {
    border: 1px solid#d9d9d9;
    padding: 0 11px;
    font-size: 12px;
    display: flex;
    align-items: center;
    background-color: #e9ecef;
    cursor: pointer;
  }
  .addon-before {
    border-right: none;
  }
  .addon-after {
    border-left: none;
  }
  .iconWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
