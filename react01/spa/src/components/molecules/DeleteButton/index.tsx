import React from "react";
import styles from "./styles.module.css";
import { Balloon } from "../../atoms/balloon";
import { TrashCanIcon } from "../../atoms/icon";

export const DeleteButton = ({
    onClick,
    className,
    ...props
}: {
    onClick: () => void;
    [keys: string]: string | (() => void);
}) => {
    return (
        <span className={[styles.root, className].join(" ")} {...props}>
            <TrashCanIcon onClick={onClick} />
            <Balloon>削除する</Balloon>
        </span>
    );
};
