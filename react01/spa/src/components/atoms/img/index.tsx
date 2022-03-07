import React, { VFC } from "react";

interface Props {
    width: number;
    height: number;
    src: string;
    className: string;
    [keys: string]: string | number;
}

export const Img: VFC<Props> = (props) => {
    return <img alt="" {...props} />;
};
