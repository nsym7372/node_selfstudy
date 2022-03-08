import React, { VFC } from "react";
import { Heading } from "../../atoms/heading";
import { Img } from "../../atoms/img";
import { DeleteButton } from "../../molecules/DeleteButton";
import styles from "./styles.module.css";
import { InfoTxt } from "../../atoms/txt";
import { Time } from "../../atoms/time";

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
                <Heading level={3} visualLevel={6}>
                    {program.title}
                </Heading>
                <InfoTxt size="s">{program.channelName}</InfoTxt>
                <InfoTxt size="s" className={styles.time}>
                    <Time format="MM月DD日(ddd)HH:mm">{program.startAt}</Time>〜
                    <Time format="MM月DD日(ddd)HH:mm">{program.endAt}</Time>
                </InfoTxt>
            </div>
            <DeleteButton onClick={onClickDelete} className={styles.del} />
        </section>
    );
};
