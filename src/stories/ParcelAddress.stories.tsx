import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import ParcelAddress from "../components/ParcelAddress/ParcelAddress";
import FlightLandIcon from "@mui/icons-material/FlightLand";

const address_from = {
  province: "province",
  city: "city",
  name: "name",
  zip: "zip",
  country: "country",
  address1: "address1",
  company: "company",
  address2: "address2",
  phone: "phone",
  email: "email",
};

export default {
  title: "ParcelAddress",
  component: ParcelAddress,
  argTypes: { onClick: { action: "onClick" } },
} as ComponentMeta<typeof ParcelAddress>;

const Template: ComponentStory<typeof ParcelAddress> = (args) => (
  <ParcelAddress {...args} />
);

export const Default = Template.bind({});

Default.args = {
  address: address_from,
  indicator: "indicator",
  icon: FlightLandIcon,
};
