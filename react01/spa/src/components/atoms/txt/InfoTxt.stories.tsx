import React from "react";
import { InfoTxt } from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Atoms/Txt",
    component: InfoTxt,
} as ComponentMeta<typeof InfoTxt>;

const Template: ComponentStory<typeof InfoTxt> = (args) => (
    <InfoTxt {...args} />
);

export const InfoPrimary = Template.bind({});
InfoPrimary.args = {
    children: "hello world",
};

export const InfoSecondary = Template.bind({});
InfoSecondary.args = {
    size: "l",
    children: "hello world",
};
