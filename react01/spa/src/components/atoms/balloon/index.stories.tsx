import React from "react";
import { Balloon } from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Example/Balloon",
    component: Balloon,
} as ComponentMeta<typeof Balloon>;

const Template: ComponentStory<typeof Balloon> = (args) => (
    <Balloon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    children: "sample",
};
