import React, { createContext, useState } from "react";
import classnames from "classnames";
import styled from "styled-components";
import { MenuItemProps } from "./MenuItem";
const Wrap = styled.ul`
  --main-bg-color: 2px solid #1890ff;
  &.viking-menu {
    display: flex;
    flex: wrap;
    margin-bottom: 30px;
    border-bottom: 1px solid #f0f0f0;
    outline: none;
    .menu-item {
      margin: -1px 20px 0;
      padding-bottom: 5px;
      cursor: pointer;
      padding: 5px;
      transition: color 0.1s;
      &.is-active,
      &:hover {
        border-bottom: var(--main-bg-color);
        color: #1890ff;
      }
      &.is-disabled {
        color: rgba(0, 0, 0, 0.25);
        cursor: not-allowed;
        border-bottom: 0;
      }
    }
  }
  &.menu-vertical {
    flex-direction: column;
    line-height: 40px;
    width: 256px;
    .menu-item {
      &.is-active,
      &:hover {
        border-bottom: none;
      }
      &.is-active {
        border-right: var(--main-bg-color);
      }
    }
  }
`;
type MenuMode = "horizontal" | "vertical";
type SelectCallback = (selectedIndex: number) => void;

export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  model?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: SelectCallback;
}

export interface IMenuContext {
  index: number;
  onSelect?: SelectCallback;
}
export const MenuContext = createContext<IMenuContext>({ index: 0 });

const Menu: React.FC<MenuProps> = (props) => {
  const { defaultIndex, className, model, style, onSelect, children } = props;

  const [currentActive, setActive] = useState(defaultIndex);

  const handleClick = (index: number) => {
    setActive(index);
    if (onSelect) {
      onSelect(index);
    }
  };

  const classes = classnames("viking-menu", className, {
    "menu-vertical": model === "vertical",
  });
  const passedContext: IMenuContext = {
    index: currentActive ?? 0,
    onSelect: handleClick,
  };
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>;
      const { displayName } = childElement.type;
      if (displayName === "MenuItem") {
        return React.cloneElement(childElement, { index });
      } else {
        console.error("warning:Menu的 child 不是MenuItem");
      }
    });
  };
  return (
    <Wrap className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </Wrap>
  );
};
Menu.defaultProps = { defaultIndex: 0, model: "horizontal" };

export default Menu;
