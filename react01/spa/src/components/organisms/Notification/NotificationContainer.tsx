import React, { VFC } from "react";
import { ContainerProps } from ".";

export const NotificationContainer: VFC<ContainerProps> = (props) => {
    return props.presenter(props);
};
