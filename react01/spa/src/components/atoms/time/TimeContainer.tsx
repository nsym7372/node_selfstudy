import React, { VFC } from "react";
import { ContainerProps } from ".";
import moment from "moment";

export const TimeContainer: VFC<ContainerProps> = (props) => {
    const { presenter, format } = props;
    let { children, dtime } = props;

    const value = parseInt(children as string, 10);
    children = isValid(value)
        ? formatDatetime(value, props.format)
        : "有効な時間表現ではありません";

    if (!dtime) {
        dtime = formatDatetime(value);
    }

    return presenter({ format, children, dtime });
};

const isValid = (unixtime: number) => {
    return moment(unixtime, "x", true).isValid();
};

const formatDatetime = (datetime: number, format = "YYYY-MM-DDTHH:mm") => {
    return moment(datetime).format(format);
};
