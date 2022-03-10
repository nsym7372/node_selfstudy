import React, { VFC } from "react";
import { ContainerProps } from ".";

export const IconContainer: VFC<ContainerProps> = (props) => {
    const { presenter, ...iconProps } = props;
    const className = iconProps.onClick ? "clickable" : "";
    const src = `img/${props.image}.svg`;
    return presenter({ ...iconProps, className, src });
};
