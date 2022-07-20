import { ComponentMeta, ComponentStory } from "@storybook/react";
import { DEFAULT_EMOJIS, EmojiSelector } from "./index";

const story: ComponentMeta<typeof EmojiSelector> = {
  title: "Emoji Selector",
  component: EmojiSelector,
  argTypes: {
    emojis: {},
  },
};
export default story;

const Template: ComponentStory<typeof EmojiSelector> = (args) => (
  <EmojiSelector {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  emojis: DEFAULT_EMOJIS,
};
