import React, { VFC } from "react";
import { TimeProps } from ".";

export const TimePresenter: VFC<TimeProps> = (props) => {
    return <time {...props}>{props.children}</time>;
};
