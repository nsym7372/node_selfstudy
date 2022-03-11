import React from "react";
import { ContainerPropsType } from ".";
import styles from "./styles.module.css";

export const HoverTipInteractionContainer = (props: ContainerPropsType) => {
    let { presenter, ...presenterProps } = props;

    if (React.isValidElement(presenterProps.children)) {
        presenterProps.children = React.Children.map(
            presenterProps.children.props.children,
            (child) => {
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
                } else if (child.type.displayName === "Marker") {
                    const grandChild = child.props.children;
                    return React.cloneElement(grandChild, {
                        className: [
                            styles.marker,
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
