import React from "react";
import { TimeFactory } from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Sample/TimeFactory",
    component: TimeFactory,
} as ComponentMeta<typeof TimeFactory>;

const Template: ComponentStory<typeof TimeFactory> = (args) => (
    <TimeFactory {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    children: 1507032000000,
};

export const InValid = Template.bind({});
InValid.args = {
    children: "invalid",
};

export const Format = Template.bind({});
Format.args = {
    children: 1507032000000,
    format: "MM月DD日(ddd)HH:mm",
};

// export const Chevron = Template.bind({});
// Chevron.args = {
//     src: "img/chevron.svg",
//     onClick: () => alert("hello"),
// };
