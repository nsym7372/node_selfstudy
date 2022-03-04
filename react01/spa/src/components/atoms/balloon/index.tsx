import React, { ReactNode, VFC } from "react";
import styles from "./styles.module.css";

interface Props {
    children: ReactNode;
}

export const Balloon: VFC<Props> = (props) => {
    const { children } = props;
    return <span className={styles.balloon}>{children}</span>;
};
