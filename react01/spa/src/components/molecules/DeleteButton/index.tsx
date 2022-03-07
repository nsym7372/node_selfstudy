import React from "react";
import styles from "./styles.module.css";
import { Balloon } from "../../atoms/balloon";
import { TrashCanIcon } from "../../atoms/icon";

export const DeleteButton = ({ ...props }) => {
    return (
        <span className={[styles.root].join(" ")} {...props}>
            <TrashCanIcon />
            <Balloon>削除する</Balloon>
        </span>
    );
};
