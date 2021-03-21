import React, { useContext } from "react";
import classnames from "classnames";
import { MenuContext } from "./Menu";

export interface SubMenuProps {
  index?: number;
  title?: string;
  className?: string;
}
const SubMenu: React.FC<SubMenuProps> = ({
  index,
  title,
  className,
  children,
}) => {
  const context = useContext(MenuContext);
  const classes = classnames("submenu-item", className, {
    "is-active": context.index === index,
  });
  return (
    <ul key={index} className={classes}>
      <div className="submenu-title">{title}</div>
      {children}
    </ul>
  );
};

export default SubMenu;
