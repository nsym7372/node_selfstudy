import React, { VFC } from "react";
import { ContainerProps } from ".";

export const IconContainer: VFC<ContainerProps> = (props) => {
    const { presenter, ...iconProps } = props;
    const className = iconProps.onClick ? "clickable" : "";
    return presenter({ ...iconProps, className });
};
