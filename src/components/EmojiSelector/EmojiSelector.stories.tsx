import { ComponentMeta, ComponentStory } from "@storybook/react";
import { DEFAULT_EMOJIS, EmojiSelector } from ".";

export default {
  title: "Emoj iSelector",
  component: EmojiSelector,
  argTypes: {
    emojis: {

    }
  }
} as ComponentMeta<typeof EmojiSelector>

const Template: ComponentStory<typeof EmojiSelector> = (args) => <EmojiSelector {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  emojis: DEFAULT_EMOJIS
};
