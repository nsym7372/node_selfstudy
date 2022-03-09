import React from "react";
import { NotificationList } from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Organisms/NotificationList",
    component: NotificationList,
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => (
    <NotificationList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    onClickDelete: () => {
        alert("削除クリック");
    },
    programs: [
        {
            id: 1,
            thumbnail: "logo192.png",
            title: "コンポーネント思考でUI設計しよう! 第1話",
            channelName: "UIチャンネル",
            startAt: 150732000000,
            endAt: 150735600000,
        },
        {
            id: 2,
            thumbnail: "logo192.png",
            title: "コンポーネント思考でUI設計しよう! 第2話",
            channelName: "UIチャンネル",
            startAt: 150732000000,
            endAt: 150735600000,
        },
        {
            id: 3,
            thumbnail: "logo192.png",
            title: "コンポーネント思考でUI設計しよう! 第3話",
            channelName: "UIチャンネル",
            startAt: 150732000000,
            endAt: 150735600000,
        },
    ],
};
