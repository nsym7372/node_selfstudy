import React, { VFC } from "react";
import styles from "./styles.module.css";

interface Props {
    height: number;
    width: number;
    src: string;
    onClick?: () => void;
    options: {};
}

export const TrashCanIcon: VFC<Props> = (props) => {
    const { height, width, src, options, onClick } = props;

    return (
        <img
            src={src}
            alt=""
            height={height}
            width={width}
            className={onClick && `${styles.clickable}`}
            onClick={onClick}
            {...options}
        />
    );
};
