import React from "react";
import { ContainerPropsType } from ".";
import styles from "./styles.module.css";

export const HoverTipInteractionContainer = (props: ContainerPropsType) => {
    let { presenter, ...presenterProps } = props;

    if (React.isValidElement(presenterProps.children)) {
        // @ts-ignore childrenに渡されるJSXの構造に依存しているが、テキスト（P152）に沿って進めるためにts-ignore
        presenterProps.children = React.Children.map(
            presenterProps.children.props.children,
            (child: any) => {
                if (child.type.displayName === "Tip") {
                    const grandChild = React.Children.only(
                        child.props.children
                    );
                    return React.cloneElement(grandChild, {
                        className: [
                            styles.tip,
                            grandChild.props.className,
                        ].join(" "),
                    });
                }
                return child;
            }
        );
    }
    return presenter(presenterProps);
};
