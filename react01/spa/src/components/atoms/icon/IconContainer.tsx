import React, { VFC } from "react";
import { ContainerProps } from ".";

// presenter関数の型
// type Presenter = (onClick: () => void) => JSX.Element;

export const IconContainer: VFC<ContainerProps> = (props) => {
    const { presenter, ...iconProps } = props;
    const className = iconProps.onClick ? ".clickable" : "";
    return presenter(iconProps);
};
