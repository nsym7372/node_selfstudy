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

export const Primary = Template.bind({});
Primary.args = {
    children: "hello hovertip",
    className: "aaa",
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: (
        <>
            <span>ホバーです</span>
            <Tip>
                <span>hover</span>
            </Tip>
        </>
    ),
    className: "abc",
};

// const jsx = (
//     <Marker>
//         <span>hello world</span>
//     </Marker>
// );

// const Template2: ComponentStory<typeof HoverTipInteraction> = (args) => (
//     <HoverTipInteraction {...args}>
//         <Marker>
//             <span>ホバーです</span>
//         </Marker>
//         <Tip>
//             <span>hover</span>
//         </Tip>
//     </HoverTipInteraction>
// );
// export const Secondary = Template2.bind({});
// Secondary.args = {};
// Primary.args = {
//     children: (

//     ),
//     // className: "aaa",
// };
