import React, { VFC } from "react";
import { ContainerProps } from ".";

export const IconContainer: VFC<ContainerProps> = (props) => {
    const { presenter, ...iconProps } = props;
    const className = iconProps.onClick ? "clickable" : "";
    const sourceFile =
        props.image === "chevron" ? "img/chevron.svg" : "img/trash_can.svg";
    return presenter({ ...iconProps, className, src: sourceFile });
};
