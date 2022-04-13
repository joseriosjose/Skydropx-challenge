import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../components/Button/Button";

export default {
  title: "Button",
  component: Button,
  argTypes: { onClick: { action: "onClick" } },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  buttonType: "primary",
  text: "Button",
};
export const Secondary = Template.bind({});

Secondary.args = {
  buttonType: "secondary",
  text: "Button",
};
