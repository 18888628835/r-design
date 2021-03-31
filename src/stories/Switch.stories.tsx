// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import Switch from "../components/switch/Switch";
import { SwitchProps } from "../components/switch/Switch";

export default {
  title: "Example/Switch开关",
  component: Switch,
} as Meta;

const Switch_style: Story<SwitchProps> = (args) => {
  return (
    <>
      <Switch />
      <Switch primary />
    </>
  );
};
export const SwitchStyle = Switch_style.bind({});
SwitchStyle.storyName = "两种样式";

const Switch_checked: Story<SwitchProps> = (args) => {
  return (
    <>
      <Switch
        checked
        onChange={(value) => {
          alert(`now value is ${value}`);
        }}
      />
    </>
  );
};
export const SwitchChecked = Switch_checked.bind({});
SwitchChecked.storyName = "checked";

const Switch_onChange: Story<SwitchProps> = (args) => {
  return (
    <>
      <Switch
        status={false}
        onChange={(value) => {
          alert(`status is ${value}`);
        }}
      />
      toggle me!
    </>
  );
};
export const SwitchOnChange = Switch_onChange.bind({});
SwitchOnChange.storyName = "onChange 事件";
