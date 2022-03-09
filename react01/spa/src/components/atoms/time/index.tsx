import React, { ReactNode, VFC } from "react";
import { TimePresenter } from "./TimePresenter";
import { TimeContainer } from "./TimeContainer";

// 全部
export interface TimeProps {
    children: ReactNode;
    dtime?: string;
    format?: string;
}

export interface ContainerProps extends TimeProps {
    presenter: (props: TimeProps) => JSX.Element;
}

export const Time: VFC<TimeProps> = (props) => {
    return (
        <TimeContainer presenter={(p) => <TimePresenter {...p} />} {...props} />
    );
};
