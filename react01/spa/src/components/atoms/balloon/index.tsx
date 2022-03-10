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
    style?: {
        [key: string]: string;
    };
    [key: string]: string | ReactNode;
}

export const Balloon: VFC<Props> = (props) => {
    const { children, style, ...options } = props;
    return (
        <span className={styles.balloon} style={style} {...options}>
            {children}
        </span>
    );
};
