import React, { VFC } from "react";
import { IconPresenter } from "./IconPresenter";
import { IconContainer } from "./IconContainer";

// デフォルト値あり

interface OptionProps {
    height: number;
    width: number;
    onClick: () => void;
    options: {};
}

// 必須
export interface IconProps extends Partial<OptionProps> {
    image: "trash_can" | "chevron";
}

export interface ContainerProps extends IconProps {
    presenter: (props: PresenterProps) => JSX.Element;
}

export interface PresenterProps extends IconProps {
    src: string;
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
    options: {},
};

export const TrashCanIcon = () => {
    return <IconFactory image={"trash_can"} onClick={() => {}} />;
};
