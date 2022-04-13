import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import DeliveryItem from "../components/DeliveryItem/DeliveryItem";
import CustomThemeProvider from "../providers/CustomThemeProvider/CustomThemeProvider";
import { DeliveryItemType } from "components/DeliveryItem/DeliveryItem";

const DeliveryItemWithTheme = ({ ...props }: DeliveryItemType) => (
  <CustomThemeProvider>
    <DeliveryItem {...props} />
  </CustomThemeProvider>
);
export default {
  title: "DeliveryItem",
  component: DeliveryItemWithTheme,
  argTypes: { onClick: { action: "onClick" } },
} as ComponentMeta<typeof DeliveryItemWithTheme>;

const Template: ComponentStory<typeof DeliveryItemWithTheme> = (args) => (
  <DeliveryItemWithTheme {...args} />
);

export const Better = Template.bind({});

Better.args = {
  provider: "provider",
  service_level: "service_level",
  days: 0,
  pricing: "0",
  currency: "MXN",
  typechip: "better",
};

export const Default = Template.bind({});

Default.args = {
  provider: "provider",
  service_level: "service_level",
  days: 0,
  pricing: "0",
  currency: "MXN",
  typechip: "default",
};
export const Faster = Template.bind({});

Faster.args = {
  provider: "provider",
  service_level: "service_level",
  days: 0,
  pricing: "0",
  currency: "MXN",
  typechip: "faster",
};
