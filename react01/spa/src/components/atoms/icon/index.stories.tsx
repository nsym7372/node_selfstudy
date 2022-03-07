import React from "react";
import { IconFactory } from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Sample/IconFactory",
    component: IconFactory,
} as ComponentMeta<typeof IconFactory>;

const Template: ComponentStory<typeof IconFactory> = (args) => (
    <IconFactory {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    height: 32,
    width: 32,
    onClick: undefined,
    image: "trash_can",
    options: {},
};

export const Chevron = Template.bind({});
Chevron.args = {
    image: "chevron",
    onClick: () => alert("hello"),
};
