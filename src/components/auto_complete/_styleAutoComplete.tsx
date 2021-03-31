import styled from "styled-components";

export const Wrap = styled.div`
  position: relative;
  display: inline-block;
  .auto-complete-listWrap {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    overflow: hidden;
  }
  .auto-complete-list {
    padding: 4px 11px;
    border-top: none;
    cursor: pointer;
    &:hover {
      background-color: #f3f3f4;
    }
    &:nth-child(1) {
      background-color: #e1f6ff;
    }
  }
  .empty-icon {
    display: inline-flex;
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(-20%, 20%);
    color: #8e8e8e;
    cursor: pointer;
    svg {
      width: 18px;
      height: 18px;
    }
  }
`;
