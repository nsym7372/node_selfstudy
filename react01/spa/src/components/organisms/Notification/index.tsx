import React, { VFC } from "react";

import { NotificationContainer } from "./NotificationContainer";
import { NotificationPresenter } from "./NotificationPresenter";

export interface ProgramType {
    id: number;
    thumbnail: string;
    title: string;
    channelName: string;
    startAt: number;
    endAt: number;
}

export interface ContainerProps extends PresenterProps {
    presenter: (props: PresenterProps) => JSX.Element;
}

export interface PresenterProps {
    program: ProgramType;
    className: string;
    onClickDelete: () => void;
}

export const Notification: VFC<PresenterProps> = (props) => {
    return (
        <NotificationContainer
            presenter={(p) => <NotificationPresenter {...p} />}
            {...props}
        />
    );
};
