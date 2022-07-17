import { styled } from "@stitches/react";
import { EmojiList } from "./types";
import React from "react";

export const DEFAULT_EMOJIS: EmojiList = [
  {
    value: "😃",
    id: "happy",
  },
  {
    value: "😂",
    id: "laughing",
  },
  {
    value: "🤩",
    id: "awesome",
  },
  {
    value: "😕",
    id: "confused",
  },
];

const EmojisContainer = styled("div", {
  display: "flex",
  alignContent: "center",
  columnGap: "8px",
});

const EmojiIcon = styled("div", {
  border: "solid 1px #cfcfcf",
  padding: "2px",
  borderRadius: "50px",
  transition: "transform 200ms cubic-bezier(.5,-1,.5,2);",

  "&:hover": {
    transform: "scale(1.12)",
  },
});

const EmojiLabel = styled("label", {
  "& input": {
    // Hide the default raio select buttons
    position: "absolute",
    opacity: 0,

    [`&:checked ~ ${EmojiIcon}`]: {
      borderColor: "orange",
      transform: "scale(1.12)",
    },
  },
});

export interface Props {
  emojis?: EmojiList;
}

export const EmojiSelector: React.FC<Props> = ({ emojis = DEFAULT_EMOJIS }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <EmojisContainer>
      {emojis.map(({ value, id }) => (
        <EmojiLabel htmlFor={id}>
          <input
            type="radio"
            name="emoji-selector"
            id={id}
            onChange={handleChange}
            value={id}
          />
          <EmojiIcon>{value}</EmojiIcon>
        </EmojiLabel>
      ))}
    </EmojisContainer>
  );
};
