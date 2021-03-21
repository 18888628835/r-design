import React, { useState } from "react";

import SvgIcon from "@material-ui/core/SvgIcon";
import { SvgIconProps } from "@material-ui/core/SvgIcon";
import styled from "styled-components";

interface BaseIconProps {
  path: string;
}
export type IconProps = BaseIconProps & SvgIconProps;

//需要yarn add @material-ui/icons
const Icon: React.FC<IconProps> = ({ path, ...rest }) => {
  return (
    <SvgIcon {...rest}>
      <path d={path} />
    </SvgIcon>
  );
};

export default Icon;
