import React, { VFC } from "react";
import { ContainerProps } from ".";
import moment from "moment";

export const TimeContainer: VFC<ContainerProps> = (props) => {
    const { presenter, children } = props;

    const value = parseInt(children as string, 10);
    const text = isValid(value)
        ? formatDatetime(value)
        : "有効な時間表現ではありません";

    return presenter({ text, ...props });
};

const isValid = (unixtime: number) => {
    return moment(unixtime, "x", true).isValid();
};

const formatDatetime = (datetime: number, format = "YYYY-MM-DDTHH:mm") => {
    return moment(datetime).format(format);
};
