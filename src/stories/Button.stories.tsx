// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../components/Button/Button";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
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
