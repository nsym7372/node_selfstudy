import React from "react";
import { WarningTxt } from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Atoms/Txt",
    component: WarningTxt,
} as ComponentMeta<typeof WarningTxt>;

const Template: ComponentStory<typeof WarningTxt> = (args) => (
    <WarningTxt {...args} />
);

export const WarningPrimary = Template.bind({});
WarningPrimary.args = {
    children: "hello world",
};

export const WarningSecondary = Template.bind({});
WarningSecondary.args = {
    size: "l",
    children: "hello world",
};
