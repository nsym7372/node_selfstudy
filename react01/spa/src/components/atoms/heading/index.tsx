import React, { ReactNode, VFC } from "react";
import styles from "./styles.module.css";

interface Props {
    children?: ReactNode;
    level?: number;
    visualLevel?: number;
    className?: string;
    [keys: string]: string | number | ReactNode;
}

export const Heading: VFC<Props> = ({
    children = "",
    level = 2,
    visualLevel = undefined,
    className = "",
    props,
}: Props) => {
    const validLevel = Math.max(0, Math.min(6, level));
    const Tag = `h${validLevel}` as React.ElementType;
    const validVLevel = visualLevel ? visualLevel : validLevel;
    const tagStyle = `${styles.h} ${styles[`h${validVLevel}`]}`;
    return (
        <Tag className={[tagStyle, className].join(" ")} {...props}>
            {children}
        </Tag>
    );
};
