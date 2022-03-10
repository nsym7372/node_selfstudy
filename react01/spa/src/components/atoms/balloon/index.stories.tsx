import React from "react";
import { Balloon } from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Atoms/Balloon",
    component: Balloon,
} as ComponentMeta<typeof Balloon>;

const Template: ComponentStory<typeof Balloon> = (args) => (
    <Balloon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    children: "sample",
};

export const AbsoleteConfig = Template.bind({});
AbsoleteConfig.args = {
    children: "テキスト",
    style: { position: "absolete", top: "20px", left: "100px" },
    sample: "hello",
};
