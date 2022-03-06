import React from "react";
import { TxtFactory } from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Sample/TxtFactory",
    component: TxtFactory,
} as ComponentMeta<typeof TxtFactory>;

const Template: ComponentStory<typeof TxtFactory> = (args) => (
    <TxtFactory {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    role: "info",
};

export const Secondary = Template.bind({});
Secondary.args = {
    role: "warning",
    size: "l",
    children: "hello world",
};

// export const Clickable = Template.bind({});
// Clickable.args = {
//     src: "img/trash_can.svg",
//     onClick: () => alert("hello"),
// };

// export const Chevron = Template.bind({});
// Chevron.args = {
//     src: "img/chevron.svg",
//     onClick: () => alert("hello"),
// };
