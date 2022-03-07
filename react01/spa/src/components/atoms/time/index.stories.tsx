import React from "react";
import { Time } from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Atoms/Time",
    component: Time,
} as ComponentMeta<typeof Time>;

const Template: ComponentStory<typeof Time> = (args) => <Time {...args} />;

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
