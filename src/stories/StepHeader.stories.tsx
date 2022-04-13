import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import StepHeader from "../components/StepHeader/StepHeader";
import FlightLandIcon from "@mui/icons-material/FlightLand";

export default {
  title: "StepHeader",
  component: StepHeader,
  argTypes: { onClick: { action: "onClick" } },
} as ComponentMeta<typeof StepHeader>;

const Template: ComponentStory<typeof StepHeader> = (args) => (
  <StepHeader {...args} />
);

export const Default = Template.bind({});

Default.args = {
  type: "default",
  icon: FlightLandIcon,
  text: "text",
};

export const Completed = Template.bind({});
Completed.args = {
  type: "completed",
  icon: FlightLandIcon,
  text: "text",
};

export const Selected = Template.bind({});
Selected.args = {
  type: "selected",
  icon: FlightLandIcon,
  text: "text",
};
