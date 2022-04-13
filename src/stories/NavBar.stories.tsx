import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import NavBar from "../components/NavBar/NavBar";

const LOGO_SKYDROPX =
  "https://skydropx.com/assets/landing5/skydropx_logo-4fb27c0601c3bccddd15cad09e612eb0d777dcdbcebae56c0382a8fe2978dfa9.svg";

export default {
  title: "NavBar",
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Default = Template.bind({});

Default.args = {
  urlImg: LOGO_SKYDROPX,
};
