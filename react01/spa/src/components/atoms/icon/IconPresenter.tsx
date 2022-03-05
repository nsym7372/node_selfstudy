import React, { VFC } from "react";
import { PresenterProps } from ".";
import styles from "./styles.module.css";

export const IconPresenter: VFC<PresenterProps> = (props) => {
    const { height, width, options, src, className } = props;

    return (
        <img
            className={`${styles[className]}`}
            src={src}
            alt=""
            height={height}
            width={width}
            {...options}
        />
    );
};
