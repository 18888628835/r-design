import styled from "styled-components";
type styleProps = { primary: boolean; checked: boolean; thumb: boolean };
export const Wrap = styled.span`
  &.base_switch {
    box-sizing: border-box;
    position: relative;
    width: 58px;
    height: 38px;
    display: inline-flex;
    padding: 12px;
  }
`;
export const Thumb = styled.span<styleProps>`
  &.thumb {
    transition: all 200ms;
    position: absolute;
    z-index: 1;
    left: 9px;
    top: 8px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => (props.checked ? "#B5B5B5" : "white")};
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
      0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  }
  &.thumb_click {
    transform: translateX(20px);
    background-color: ${(props) =>
      props.primary ? "#006EC8" : "rgb(220, 0, 78)"};
  }
  &.thumb:hover i {
    background-color: ${(props) => (props.thumb ? "inherit" : "#B5B5B5")};
    opacity: 0.2;
  }
  i {
    transform: all 0.3s;
    position: absolute;
    left: -5px;
    top: -5px;
    border-radius: 50%;
    z-index: -1;
    width: 30px;
    height: 30px;
  }
`;
export const Track = styled.span<styleProps>`
  &.track {
    background-color: ${(props) => (props.checked ? "#DDDDDD" : "#959595")};
    opacity: 0.5;
    width: 100%;
    height: 100%;
    transition: all 200ms;
    border-radius: 7px;
  }
  &.track_click {
    background-color: ${(props) =>
      props.primary ? "#7DB4E3" : "rgb(220, 0, 78)"};
  }
`;
