import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import FlightLandIcon from "@mui/icons-material/FlightLand";

import Input from "../components/Input/Input";

export default {
  title: "Input",
  component: Input,
  argTypes: { onChange: { action: "onChange" } },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {
  icon: FlightLandIcon,
  label: "Label",
  placeholder: "placeholder",
  name: "name",
  value: "value",
};
