import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CheekyFeeback, ModalContainer } from ".";

const story: ComponentMeta<typeof CheekyFeeback> = {
  title: "Cheeky Feedback",
  component: CheekyFeeback,
  argTypes: {},
};

export default story;

const TemplateWithoutModal: ComponentStory<typeof CheekyFeeback> = (args) => (
  <CheekyFeeback {...args} />
);

export const WithoutModal = TemplateWithoutModal.bind({});
WithoutModal.args = {};

const TemplateWithModal: ComponentStory<typeof CheekyFeeback> = (args) => (
  <ModalContainer>
    <CheekyFeeback {...args} />
  </ModalContainer>
);

export const WithModal = TemplateWithModal.bind({});
WithModal.args = {};
