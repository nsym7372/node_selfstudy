import React, { ReactNode, VFC } from "react";
import styles from "./styles.module.css";

interface Props {
    tag: "p";
    size: "s" | "m" | "l";
    role: "default" | "info" | "warning";
    children: ReactNode;
}

export const TxtFactory: VFC<Partial<Props>> = ({
    tag = "p",
    size = "m",
    children,
    role = "default",
}) => {
    const Tag = tag as React.ElementType;
    return (
        <Tag className={[styles[role], styles[size]].join(" ")}>{children}</Tag>
    );
};

export const Txt: VFC<Omit<Partial<Props>, "role">> = (props) => {
    return <TxtFactory role="default" {...props} />;
};

export const InfoTxt: VFC<Omit<Partial<Props>, "role">> = (props) => {
    return <TxtFactory role="info" {...props} />;
};

export const WarningTxt: VFC<Omit<Partial<Props>, "role">> = (props) => {
    return <TxtFactory role="warning" {...props} />;
};
