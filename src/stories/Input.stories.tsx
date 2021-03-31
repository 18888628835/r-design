import { Story, Meta } from "@storybook/react/types-6-0";
import Svg from "../components/svg/Svg";
import Input from "../components/input/Input";
import { InputProps } from "../components/input/Input";
export default {
  title: "Example/Input",
  component: Input,
} as Meta;

const Input_default: Story<InputProps> = (args) => (
  <>
    <Input placeholder="Base" />
  </>
);
export const InputDefault = Input_default.bind({});
InputDefault.storyName = "基础样式";

const Input_disabled: Story<InputProps> = (args) => {
  return (
    <>
      <Input placeholder="disabled" disabled />
    </>
  );
};
export const InputDisabled = Input_disabled.bind({});
InputDisabled.storyName = "disabled";

const Input_size: Story<InputProps> = (args) => (
  <>
    <Input size="small" placeholder="small" />
    <br />
    <Input placeholder="normal" />
    <br />
    <Input size="large" placeholder="large" />
  </>
);
export const InputSize = Input_size.bind({});
InputSize.storyName = "支持三种尺寸";

const Input_addon: Story<InputProps> = (args) => (
  <>
    <Input placeholder="addonBefore" addonBefore={"http://"} />
    <br />
    <Input placeholder="addonAfter" addonAfter={"@qq.com"} />
    <br />
    <Input
      placeholder="addonAfter"
      addonAfter={".com"}
      addonBefore={"http://"}
    />
  </>
);
export const InputAddon = Input_addon.bind({});
InputAddon.storyName = "前缀与后缀";

const Input_icon: Story<InputProps> = (args) => (
  <>
    <Input
      placeholder="icon"
      icon={<Svg svgName="icon-yemian-copy-copy-copy-copy"></Svg>}
    />
  </>
);
export const InputIcon = Input_icon.bind({});
InputIcon.storyName = "icon";
