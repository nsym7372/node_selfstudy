import React, { ReactNode } from "react";
import { HoverTipInteractionContainer } from "./container";
import { HoverTipInteractionPresenter } from "./presenter";

export interface ContainerPropsType extends PresenterPropsType {
    presenter: (props: PresenterPropsType) => JSX.Element;
}

export interface PresenterPropsType {
    className: string;
    children: ReactNode;
    [keys: string]: string | ReactNode;
}

export const HoverTipInteraction = (props: PresenterPropsType) => {
    return (
        <HoverTipInteractionContainer
            presenter={(presenterProps) => (
                <HoverTipInteractionPresenter {...presenterProps} />
            )}
            {...props}
        />
    );
};

// コンポーネント区別のために利用、レンダリングはしない
export const Tip = (props: any) => <></>;
export const Marker = (props: any) => <></>;
