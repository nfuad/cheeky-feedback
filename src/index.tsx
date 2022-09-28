import React, { useEffect } from "react";
import { Form } from "./components/form";
import { ModalContainer } from "./components/modal-container";
import { MoodSelector } from "./components/mood-selector";
import { Mood, MOODS_DATA, MoodList } from "./moods";
import { styled } from "./theme";

export const DEFAULT_MOODS_LIST = MOODS_DATA["msFluent"];

export type FeedbackData = {
  moodData: {
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

const Container = styled("form", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "360px",
  position: "relative",
  fontFamily: "sans-serif-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif",
});

export type HandleFeedbackSubmit = (data: FeedbackData) => void;

type CheekyFeebackProps = {
  onSubmit: HandleFeedbackSubmit;
  moods: MoodList;
  showForm: boolean;
}

const CheekyFeeback: React.FC<CheekyFeebackProps> = ({
  onSubmit = () => {},
  moods = DEFAULT_MOODS_LIST,
  showForm = true,
}) => {
  const [mood, setMood] = React.useState<Mood>();
  const [comment, setComment] = React.useState("");

  const handleMoodChange = (mood: Mood) => {
    setMood(mood);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (mood) {
      const value = moods.findIndex((m) => m.id === mood.id) + 1;
      let moodData = {
        value,
        total: moods.length,
        label: mood.label,
        id: mood.id,
      };
      console.log(moodData, comment);
      onSubmit({
        moodData,
        comment,
      });
    }
 
  };

  return (
    <Container onSubmit={handleSubmit}>
      <MoodSelector moods={moods} handleChange={handleMoodChange} />
      <Form showForm={!!mood || showForm} onChange={(v) => setComment(v)} />
    </Container>
  );
};

export { CheekyFeeback, ModalContainer };
