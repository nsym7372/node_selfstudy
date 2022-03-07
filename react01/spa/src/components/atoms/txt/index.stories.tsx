import React from "react";
import { Txt } from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Atoms/Txt",
    component: Txt,
} as ComponentMeta<typeof Txt>;

const Template: ComponentStory<typeof Txt> = (args) => <Txt {...args} />;

export const TxtPrimary = Template.bind({});
TxtPrimary.args = {
    children: "hello world",
};

export const TxtSecondary = Template.bind({});
TxtSecondary.args = {
    size: "l",
    children: "hello world",
};
