import React, { ReactNode } from "react";
import classnames from "classnames";
import { Wrap } from "./_styleInput";

export interface InputProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    "size"
  > {
  disabled?: boolean;
  size?: "large" | "small";
  icon?: ReactNode;
  addonAfter?: ReactNode | string;
  addonBefore?: ReactNode | string;
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    disabled,
    size,
    icon,
    addonAfter,
    addonBefore,
    className,
    ...restProps
  } = props;
  const classes = classnames("viking-ipt", className, {
    [`viking-ipt-${size}`]: size,
  });

  return (
    <Wrap>
      {addonBefore && <span className="addon-before">{addonBefore}</span>}
      <div className={icon ? classes : ""}>
        <span>{icon}</span>
        <input
          disabled={disabled}
          className={icon ? "ipt" : classes}
          {...restProps}
          ref={ref}
        />
      </div>
      {addonAfter && <span className="addon-after">{addonAfter}</span>}
    </Wrap>
  );
});

export default Input;
