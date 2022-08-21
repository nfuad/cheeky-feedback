import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Form } from ".";
import { styled } from "../../theme";

const story: ComponentMeta<typeof Form> = {
  title: "Form",
  component: Form,
  argTypes: {
    isCollapsed: { control: "boolean" },
  },
};
export default story;

const Box = styled("div", {
  maxWidth: "390px",
  width: "100%",
});

const Template: ComponentStory<typeof Form> = (args) => (
  <Box>
    <Form {...args} />
  </Box>
);

export const Primary = Template.bind({});

Primary.args = {
  isCollapsed: false,
};
