import { ComponentMeta, ComponentStory } from "@storybook/react";
import { DEFAULT_MOODS_LIST, MoodSelector } from "./index";

const story: ComponentMeta<typeof MoodSelector> = {
  title: "Emoji Selector",
  component: MoodSelector,
  argTypes: {
    moods: {},
  },
};
export default story;

const Template: ComponentStory<typeof MoodSelector> = (args) => (
  <MoodSelector {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  moods: DEFAULT_MOODS_LIST,
};
