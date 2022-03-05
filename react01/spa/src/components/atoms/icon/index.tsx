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
    presenter: (props: PresenterProps) => JSX.Element;
}

export interface PresenterProps extends IconProps {
    className: string;
}

export const TrashCanIcon: VFC<IconProps> = (iconProps) => {
    return (
        <IconContainer
            presenter={(presetnerProps: PresenterProps) => (
                <IconPresenter {...presetnerProps} />
            )}
            {...iconProps}
        />
    );
};
