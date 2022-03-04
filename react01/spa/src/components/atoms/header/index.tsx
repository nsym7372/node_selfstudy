import React, { ReactNode, VFC } from "react";
import styles from "./styles.module.css";

interface Props {
    children: ReactNode;
    level: number;
    visualLevel: number;
    className: string;
    options: {};
}

export const Heading: VFC<Props> = (props) => {
    const { children, level, visualLevel, className, options } = props;
    const validLevel = Math.max(0, Math.min(6, level));
    const Tag = `h${validLevel}` as React.ElementType;
    const tagStyle = `${styles.h} ${styles[`h${visualLevel}`]}`;
    return (
        <Tag className={[tagStyle, className].join(" ")} {...options}>
            {children}
        </Tag>
    );
};
