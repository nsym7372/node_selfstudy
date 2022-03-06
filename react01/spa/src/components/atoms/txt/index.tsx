import React, { ReactNode, VFC } from "react";
import styles from "./styles.module.css";

// 全部

// 任意 デフォルト値あり
interface DefaultPropsType {
    tag: "p";
    size: "s" | "m" | "l";
    children: ReactNode;
}

// 必須
interface TxtPropsType extends DefaultPropsType {
    role: "default" | "info" | "warning";
}

export const TxtFactory: VFC<TxtPropsType> = ({
    tag = "p",
    size = "m",
    children = "Hello",
    role,
}) => {
    const Tag = tag as React.ElementType;
    return (
        <Tag className={[styles[role], styles[size]].join(" ")}>{children}</Tag>
    );
};
