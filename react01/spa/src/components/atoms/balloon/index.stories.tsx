import React from "react";
import { Balloon } from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Sample/Balloon",
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
    options: { position: "absolete", top: "15px", left: "15px" },
};
