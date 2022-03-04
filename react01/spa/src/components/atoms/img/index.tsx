import React, { VFC } from "react";

interface Props {
    alt?: string;
    options: {};
}

export const Img: VFC<Props> = (props) => {
    const { alt, options } = props;
    return <img alt={alt} {...options} />;
};
