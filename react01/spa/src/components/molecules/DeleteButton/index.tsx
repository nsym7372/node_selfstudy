import React from "react";
import styles from "./styles.module.css";
import { Balloon } from "../../atoms/balloon";
import { TrashCanIcon } from "../../atoms/icon";

export const DeleteButton = ({
    onClick,
    ...props
}: {
    onClick: () => void;
    [keys: string]: string | (() => void);
}) => {
    return (
        <span className={[styles.root].join(" ")} {...props}>
            <TrashCanIcon onClick={onClick} />
            <Balloon>削除する</Balloon>
        </span>
    );
};
