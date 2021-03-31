import classnames from "classnames";
import React, { useState } from "react";
import { Wrap } from "./_styleAlert";
import "animate.css";

export enum AlertVariant {
  Outline = "outline",
  Fill = "filled",
}
export interface AlertProps {
  model: "success" | "default" | "danger" | "warning";
  children: React.ReactNode;
  className: string;
  variant: "outline" | "filled";
  closed: boolean;
  title: string;
  style: React.CSSProperties;
  onClick?: (args?: any) => void;
}
// 需要引入<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
const Alert: React.FC<Partial<AlertProps>> = (props) => {
  const {
    model,
    children,
    className,
    variant,
    closed,
    title,
    style,
    onClick,
  } = props;
  const [disabled, setDisabled] = useState<boolean>(false);

  const classes = classnames("ale", className, "animate__animated", {
    [`ale-${model}`]: model,
    [`ale-${variant}-${model}`]: variant,
    [`ale-${variant}`]: variant,
    animate__fadeOut: disabled,
  });

  return (
    <Wrap className={classes} style={style}>
      <span>
        {title && <div className="ale-title">{title}</div>}
        {children}
      </span>
      {(closed || onClick) && (
        <span>
          <span
            className="ale-closed"
            onClick={() => {
              if (closed) {
                setDisabled(true);
              }
              if (onClick) {
                onClick();
              }
            }}
          >
            X
          </span>
        </span>
      )}
    </Wrap>
  );
};
Alert.defaultProps = { model: "default" };
export default Alert;
