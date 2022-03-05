import React from "react";
import { TrashCanIcon } from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Sample/TrashCanIcon",
    component: TrashCanIcon,
} as ComponentMeta<typeof TrashCanIcon>;

const Template: ComponentStory<typeof TrashCanIcon> = (args) => (
    <TrashCanIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    height: 24,
    width: 24,
    src: "icon.svg",
};

// export const Clickable = Template.bind({});
// Clickable.args = {
//     height: 24,
//     width: 24,
//     src: "icon.svg",
//     onClick: () => alert("hello"),
// };
