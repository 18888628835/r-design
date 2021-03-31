// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import SVG from "../components/svg/Svg";
import { SvgProps } from "../components/svg/Svg";
import { createSvgScript } from "../components/svg/Svg";
export default {
  title: "Example/SVG",
  component: SVG,
} as Meta;

createSvgScript([
  "//at.alicdn.com/t/font_2334418_rvcbq0a2z4s.js",
  "//at.alicdn.com/t/font_2425278_pvgzr0ylgd.js",
]);

const Svg_default: Story<SvgProps> = (args) => {
  return (
    <>
      <SVG svgName="icon-qianjin"></SVG>
    </>
  );
};
export const SvgDefault = Svg_default.bind({});
SvgDefault.storyName = "iconFont引入";
// 这里
const Svg_color: Story<SvgProps> = (args) => {
  createSvgScript(["//at.alicdn.com/t/font_2334418_rvcbq0a2z4s.js"]);
  return (
    <>
      <SVG
        svgName="icon-qianjin"
        style={{ color: "red", marginRight: "10px" }}
      />
      <SVG
        svgName="icon-qianjin"
        style={{ color: "green", marginRight: "10px" }}
      />
      <SVG svgName="icon-qianjin" style={{ color: "orange" }} />
    </>
  );
};
export const SvgColor = Svg_color.bind({});
SvgColor.storyName = "添加颜色";

const Svg_size: Story<SvgProps> = (args) => {
  return (
    <>
      <SVG
        svgName="icon-qianjin"
        style={{ fontSize: "20px", marginRight: "10px" }}
      />
      <SVG svgName="icon-qianjin" style={{ fontSize: "30px" }} />
    </>
  );
};
export const SvgSize = Svg_size.bind({});
SvgSize.storyName = "尺寸大小";
