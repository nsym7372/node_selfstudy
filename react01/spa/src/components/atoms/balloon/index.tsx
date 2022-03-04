import React, { ReactNode, VFC } from "react";
import styles from "./styles.module.css";

interface Props {
    /**
     * ラベル
     */
    children?: ReactNode;
    /**
     * インラインスタイル
     */
    options?: {};
}

export const Balloon: VFC<Props> = (props) => {
    const { children, options } = props;
    return (
        <span className={styles.balloon} style={options}>
            {children}
        </span>
    );
};
