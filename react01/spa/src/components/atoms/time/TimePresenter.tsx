import React, { VFC } from "react";
import { PresenterProps } from ".";

export const TimePresenter: VFC<PresenterProps> = (props) => {
    const { text } = props;

    return <time>{text}</time>;
};
