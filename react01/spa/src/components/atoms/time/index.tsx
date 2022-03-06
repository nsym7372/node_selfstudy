import React, { ReactNode, VFC } from "react";
import { TimePresenter } from "./TimePresenter";
import { TimeContainer } from "./TimeContainer";

// 全部
export interface TimeProps {
    children: ReactNode;
    datetime: Date;
    format: string;
}

export interface ContainerProps extends TimeProps {
    presenter: (props: PresenterProps) => JSX.Element;
}

export interface PresenterProps extends TimeProps {
    text: string;
}

export const TimeFactory: VFC<TimeProps> = (props) => {
    return (
        <TimeContainer
            presenter={(presetnerProps: PresenterProps) => (
                <TimePresenter {...presetnerProps} />
            )}
            {...props}
        />
    );
};
