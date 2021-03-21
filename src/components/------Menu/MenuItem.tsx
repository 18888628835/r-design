import React, { useContext } from "react";
import classnames from "classnames";
import { MenuContext } from "./Menu";
export interface MenuItemProps {
  index?: number;
  disabled?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { disabled, className, style, index, children } = props;
  const context = useContext(MenuContext);
  const classes = classnames("menu-item", className, {
    "is-disabled": disabled,
    "is-active": context.index === index,
  });
  const handleClick = () => {
    if (!disabled && context.onSelect && index) {
      context.onSelect(index);
    }
  };
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  );
};

MenuItem.displayName = "MenuItem";
export default MenuItem;
