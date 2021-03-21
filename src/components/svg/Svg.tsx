import React from "react";
import styled from "styled-components";
import classnames from "classnames";
const Wrap = styled.svg``;

export interface SvgProps {
  className?: string;
  style?: React.CSSProperties;
  svgName: string;
}
//Iconfont 需要做的默认操作，这里用函数直接完成，省人力成本
export const createSvgScript: (rest: Array<string>) => void = (rest) => {
  const head = document.querySelector("head");
  const style = document.createElement("style");
  //添加 css 内容
  style.innerText =
    ".icon{ width: 1em;height: 1em;vertical-align: -0.15em;fill: currentColor;overflow: hidden;}";
  //插到 head 中
  head!.appendChild(style);
  //遍历rest 后插入 script 标签
  for (let k of rest) {
    const script = document.createElement("script");
    script.src = k;
    document.body.appendChild(script);
  }
};

const SVG: React.FC<SvgProps> = ({ className, style, svgName }) => {
  const classes = classnames("icon", className);
  return (
    <Wrap className={classes} style={style} aria-hidden="true">
      <use xlinkHref={`#${svgName}`}></use>
    </Wrap>
  );
};
export default SVG;
