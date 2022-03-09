import React, { VFC } from "react";
import { ContainerProps } from ".";

export const NotificationContainer: VFC<ContainerProps> = (props) => {
    let { className, program, onClickDelete: deleteFunc } = props;
    const onClickDelete = () => {
        console.log(program);
        deleteFunc();
    };
    return props.presenter({
        className,
        program,
        onClickDelete,
    });
};
