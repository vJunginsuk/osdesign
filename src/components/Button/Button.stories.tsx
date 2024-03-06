import React from "react";
// typescript 사용을 위한 필요요소
import { Meta, Story } from "@storybook/react";
import Button, { ButtonProps } from ".";

export default {
  component: Button,
  title: "Button",
  argTypes: { onClick: { action: "onClick" } },
  parameters: {
    componentSubtitle:
      "Displays an image that represents a user or organization",
  },
} as Meta;
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Outline = Template.bind({});
Outline.args = { type: "outline", children: "button", disabled: false };

export const Primary = Template.bind({});
Primary.args = { type: "primary", children: "button", disabled: false };

export const Text = Template.bind({});
Text.args = { type: "text", children: "button", disabled: false };
