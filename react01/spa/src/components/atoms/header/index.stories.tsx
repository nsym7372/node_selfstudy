import React from "react";
import { Heading } from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Sample/Heading",
    component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
    <Heading {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    children: "見出しレベル１",
    level: 1,
    visualLevel: 1,
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: "見出しレベル１、見た目２",
    level: 1,
    visualLevel: 2,
};
