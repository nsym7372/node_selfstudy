import React from "react";
import { HoverTipInteraction, Marker, Tip } from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Atoms/HoverTipInteraction",
    component: HoverTipInteraction,
} as ComponentMeta<typeof HoverTipInteraction>;

const Template: ComponentStory<typeof HoverTipInteraction> = (args) => {
    return <HoverTipInteraction {...args} />;
};

export const HoverStyle = Template.bind({});
HoverStyle.args = {
    children: (
        <>
            <span>ホバーしてね</span>
            <Tip>
                <span>Tipだよ</span>
            </Tip>
        </>
    ),
};

export const MarkerStyle = Template.bind({});
MarkerStyle.args = {
    children: (
        <>
            <Marker>
                <span>ホバーしてね</span>
            </Marker>
            <Tip>
                <span>Tipだよ</span>
            </Tip>
        </>
    ),
};
