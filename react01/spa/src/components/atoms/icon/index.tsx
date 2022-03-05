import React, { VFC } from "react";
import { IconPresenter } from "./IconPresenter";
import { IconContainer } from "./IconContainer";

// 全部
export interface IconProps {
    height: number;
    width: number;
    src: string;
    onClick?: () => void;
    options: {};
}

export interface ContainerProps extends IconProps {
    presenter: (props: IconProps) => JSX.Element;
}

export interface PresenterProps extends IconProps {
    className: string;
}

// const ret = (props: iconProps) => <IconPresenter {...presenterProps} />;

export const TrashCanIcon: VFC<IconProps> = (props) => {
    return (
        <IconContainer
            presenter={(iconProps: IconProps) => (
                <IconPresenter {...iconProps} />
            )}
            {...props}
        />
    );
};
