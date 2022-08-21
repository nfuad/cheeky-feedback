import React from "react";
import { Form } from "./components/form";
import { ModalContainer } from "./components/modal-container";
import { MoodSelector } from "./components/mood-selector";
import { Mood, MOODS_DATA, MoodList } from "./moods";
import { styled } from "./theme";

export const DEFAULT_MOODS_LIST = MOODS_DATA["msFluent"];

export interface FeedbackData {
  mood: {
    value: number;
    total: number;
    label: string;
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

interface CheekyFeebackProps {
  handleSubmit: HandleFeedbackSubmit;
  moods: MoodList;
  /**
   * Text to be displayed in the header of the form.
   */
  headerText: string;
}

const CheekyFeeback: React.FC<CheekyFeebackProps> = ({
  handleSubmit,
  moods = DEFAULT_MOODS_LIST,
  headerText = "How was your onboarding?",
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
