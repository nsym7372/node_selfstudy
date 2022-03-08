import React from "react";
import { Notification } from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Organisms/Notification",
    component: Notification,
} as ComponentMeta<typeof Notification>;

const Template: ComponentStory<typeof Notification> = (args) => (
    <Notification {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    onClickDelete: () => {
        alert("削除ボタンがクリックされました");
    },
    program: {
        id: 0,
        thumbnail: "logo192.png",
        title: "コンポーネント思考でUI設計しよう! 第一話",
        channelName: "UIチャンネル",
        startAt: 150732000000,
        endAt: 150735600000,
    },
};
