import React from "react";
import { DeleteButton } from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

export default {
    title: "Molecules/DeleteButton",
    component: DeleteButton,
} as ComponentMeta<typeof DeleteButton>;

const Template: ComponentStory<typeof DeleteButton> = (args) => (
    <DeleteButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    onClick: () => {
        alert("削除ボタンがクリックされました");
    },
    // height: 32,
    // width: 32,
    // onClick: undefined,
    // image: "trash_can",
    // options: {},
};

// export const Chevron = Template.bind({});
// Chevron.args = {
//     image: "chevron",
//     onClick: () => alert("hello"),
// };
