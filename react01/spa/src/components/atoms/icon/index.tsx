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

export const IconFactory: VFC<IconProps> = (iconProps) => {
    return (
        <IconContainer
            presenter={(presetnerProps: PresenterProps) => (
                <IconPresenter {...presetnerProps} />
            )}
            {...iconProps}
        />
    );
};

IconFactory.defaultProps = {
    height: 32,
    width: 32,
    onClick: undefined,
    src: "img/trash_can.svg",
    options: {},
};

// export const TrashCanIcon = () => {
//     return <IconFactory />;
// };
