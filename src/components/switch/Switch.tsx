import { FC, useState } from "react";
import classnames from "classnames";
import { Wrap, Thumb, Track } from "./styleSwitch";

export type SwitchProps = {
  onChange?: (e: boolean) => void;
  primary?: boolean;
  status?: boolean;
  checked?: boolean;
};

const Switch: FC<SwitchProps> = (props) => {
  const { onChange, primary = false, status = false, checked = false } = props;
  const [thumb, setThumb] = useState(status);
  const trackClass = classnames("track", {
    track_click: thumb,
  });
  const thumbClass = classnames("thumb", {
    thumb_click: thumb,
  });
  const handleClick = () => {
    if (!checked) {
      setThumb(!thumb);
      let timer = setTimeout(() => {
        if (onChange) {
          onChange(!thumb);
        }
        clearTimeout(timer);
      }, 250);
    }
  };
  return (
    <Wrap
      className="base_switch"
      onClick={() => {
        handleClick();
      }}
    >
      <Thumb className={thumbClass} {...{ primary, checked, thumb }}>
        <i></i>
      </Thumb>
      <Track className={trackClass} {...{ primary, checked, thumb }} />
    </Wrap>
  );
};

export default Switch;
