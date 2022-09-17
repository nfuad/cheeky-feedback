import React from "react";
import { Form } from "./components/form";
import { ModalContainer } from "./components/modal-container";
import { MoodSelector } from "./components/mood-selector";
import { Mood, MOODS_DATA, MoodList } from "./moods";
import { styled } from "./theme";

export const DEFAULT_MOODS_LIST = MOODS_DATA["msFluent"];

export type FeedbackData = {
  mood: {
    /**
     * Score of the mood, with max = mood.total
     */
    value: number;
    /**
     * Total number of moods in the list.
     */
    total: number;
    label: string;
    /**
     * Unique identifier for the mood.
     */
    id: string;
  };
  comment: string;
}

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "360px",
  position: "relative",
});

type HandleFeedbackSubmit = (data: FeedbackData) => void;

type CheekyFeebackProps = {
  handleSubmit: HandleFeedbackSubmit;
  moods: MoodList;
}

const CheekyFeeback: React.FC<CheekyFeebackProps> = ({
  handleSubmit,
  moods = DEFAULT_MOODS_LIST,
}) => {
  const [mood, setMood] = React.useState<Mood>();

  const handleMoodChange = (mood: Mood) => {
    setMood(mood);
  };

  return (
    <Container>
      <MoodSelector moods={moods} handleChange={handleMoodChange} />
      <Form isCollapsed={!mood} />
    </Container>
  );
};

export { CheekyFeeback, ModalContainer };
