import { Meta, StoryObj } from "@storybook/nextjs";
import { Button } from "./Button";

const meta = {
  title: "Controls/Button",
  component: Button,
  argTypes: {
    color: {
      control: { type: "radio" },
      options: ["primary", "secondary", "danger", "warning"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
    color: "primary",
  },
};
