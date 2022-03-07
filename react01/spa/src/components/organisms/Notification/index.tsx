import React, { VFC } from "react";
import { Img } from "../../atoms/img";
import { DeleteButton } from "../../molecules/DeleteButton";
import styles from "./styles.module.css";

interface ProgramType {
    id: number;
    thumbnail: string;
    title: string;
    channelName: string;
    startAt: number;
    endAt: number;
}

export const Notification = ({
    program,
    className,
    onClickDelete,
    ...props
}: {
    program: ProgramType;
    className: string;
    onClickDelete: () => void;
    [keys: string]: string | (() => void) | ProgramType;
}) => {
    return (
        <section className={[styles.root, className].join(" ")} {...props}>
            <div>
                <Img
                    src={program.thumbnail}
                    className={styles.media}
                    height={72}
                    width={128}
                />
            </div>
            <div className={styles.body}>
                {/* Heading */}
                {/* <InfoTxt></InfoTxt> */}
                {/* <Time></Time> */}
                <DeleteButton onClick={onClickDelete} className={styles.del} />
            </div>
        </section>
    );
};
