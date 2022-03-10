import React, { VFC } from "react";
import { IconPresenter } from "./IconPresenter";
import { IconContainer } from "./IconContainer";

// デフォルト値あり

interface OptionProps {
    height: number;
    width: number;
    onClick: () => void;
    options: {};
    image: "trash_can" | "chevron" | "svg_icon";
}

export interface ContainerProps extends Partial<OptionProps> {
    presenter: (props: PresenterProps) => JSX.Element;
}

export interface PresenterProps extends Partial<OptionProps> {
    src: string;
    className: string;
}

export const IconFactory: VFC<Partial<OptionProps>> = (optionProps) => {
    return (
        <IconContainer
            presenter={(presetnerProps: PresenterProps) => (
                <IconPresenter {...presetnerProps} />
            )}
            {...optionProps}
        />
    );
};

IconFactory.defaultProps = {
    height: 32,
    width: 32,
    onClick: undefined,
    options: {},
};

export const TrashCanIcon: VFC<Partial<OptionProps>> = ({
    height = 32,
    width = 32,
    onClick = () => {},
    options = {},
    image = "trash_can",
}) => {
    return <IconFactory {...{ image, height, width, onClick, options }} />;
};

// [FYI] Propsにデフォルト値設定
// export const Sample = ({
//     hoge = "sample",
//     fuga,
// }: {
//     hoge?: string;
//     fuga: number;
// }) => {
//     //
//     console.log(hoge);
//     console.log(fuga);
//     return (
//         <>
//             <span>{hoge}</span>
//             <span>{fuga}</span>
//         </>
//     );
// };

// export const tmp = () => {
//     return <Sample fuga={1} />;
// };
