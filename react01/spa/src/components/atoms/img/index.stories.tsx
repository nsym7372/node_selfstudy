import React from "react";
import { Img } from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Sample/Img",
    component: Img,
} as ComponentMeta<typeof Img>;

const Template: ComponentStory<typeof Img> = (args) => <Img {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    options: {
        src: "logo192.png",
        width: "128",
        height: "128",
    },
};
