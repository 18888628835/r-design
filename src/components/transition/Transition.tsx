import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import classnames from "classnames";
import { CSSTransitionProps } from "react-transition-group/CSSTransition";
const Wrap = styled.div`
  .commonStyle {
    transition: opacity 300ms, transform 300ms;    
  }
  /* alert样式 */
  .alert-enter {
    opacity: 0;
    transform: scale(0.9);
    transform-origin: top left; 
  }
  .alert-enter-active {
    opacity: 1;
    transform: translateX(0);
  }
  .alert-exit {
    opacity: 1;
    transform-origin: center center; 
  }
  .alert-exit-active {
    opacity: 0;
    transform: scale(0.9);
  }
  /* LeftIn-RightOut样式 */
  .LeftIn-RightOut-enter {
    opacity: 0;
    transform: translateX(-80%);
  }
  .LeftIn-RightOut-enter-active {
    opacity: 1;
    transform: translateX(0);
  }
  .LeftIn-RightOut-exit {
    opacity: 1;
    transform: translateX(0%);
  }
  .LeftIn-RightOut-exit-active {
    opacity: 0;
    transform: translateX(80%);
  }
  /* TopIn-BottomOut样式 */
  .TopIn-BottomOut-enter {
    opacity: 0;
    transform: translateY(-80%);
  }
  .TopIn-BottomOut-enter-active {
    transform: translateY(0);
    opacity: 1;
  }
  .TopIn-BottomOut-exit {
    opacity: 1;
    transform: translateY(0);
  }
  .TopIn-BottomOut-exit-active {
    transform: translateY(80%);
    opacity: 0;
  }
`;

type AnimationName = "alert" | "LeftIn-RightOut" | "TopIn-BottomOut";

type BaseTransitionProps = {
  animation?: AnimationName;
  showData: boolean;
};
export type TransitionProps = BaseTransitionProps & CSSTransitionProps;
const Transition: React.FC<TransitionProps> = (props) => {
  const { className, animation, children, showData, ...restProps } = props;
  const classes = classnames(className);
  return (
    <Wrap>
      <CSSTransition
        in={showData}
        classNames={className ? classes : animation}
        {...restProps}
      >
        <div className="commonStyle">{children}</div>
      </CSSTransition>
    </Wrap>
  );
};
Transition.defaultProps = { appear: true, unmountOnExit: true };
export default Transition;
