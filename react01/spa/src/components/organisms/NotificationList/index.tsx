import React, { VFC } from "react";
import { Notification, ProgramType } from "../Notification/index";
import styles from "./styles.module.css";

interface Props {
    programs: ProgramType[];
    onClickDelete: () => void;
    [keys: string]: string | ProgramType[] | (() => void);
}

export const NotificationList: VFC<Props> = (notificationListProps) => {
    const { programs, onClickDelete, ...props } = notificationListProps;
    return (
        <div {...props}>
            {programs.map((program, i) => {
                return (
                    <Notification
                        program={program}
                        className={styles.item}
                        onClickDelete={onClickDelete}
                    />
                );
            })}
        </div>
    );
};
