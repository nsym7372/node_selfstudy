import React, { VFC } from "react";
import { IconProps } from ".";

export const IconPresenter: VFC<IconProps> = (props) => {
    const { height, width, options, src } = props;

    return (
        // <img src="icon.svg" alt="" height={height} width={width} {...options} />
        <img src={src} alt="" height={height} width={width} {...options} />
    );
};
