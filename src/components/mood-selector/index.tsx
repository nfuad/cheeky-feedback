import { styled } from "../../theme";
import React from "react";
import { Mood, MoodList, MOODS_DATA } from "../../moods";

export const DEFAULT_MOODS_LIST = MOODS_DATA["msFluent"];

const MoodsContainer = styled("div", {
  display: "flex",
  alignContent: "center",
  columnGap: "8px",
  marginTop: "10px"
});

const MoodIcon = styled("div", {
  padding: "2px",
  paddingTop: "16px",
  transition:
    "transform 200ms cubic-bezier(.5,-1,.5,2), filter 150ms ease-in-out; opacity 1500ms ease-in-out",
  filter: "blur(1.5px)",
  opacity: 0.5,
  zIndex: 10,

  "&:hover": {
    transform: "scale(1.12)",
    filter: "blur(0)",
    opacity: 0.7,
  },
});

const GlowingBackround = styled("div", {
  background:
    "linear-gradient(179.3deg, #FFD239 3.97%, rgba(255, 201, 51, 0.24) 58.23%, #E82992 106.1%)",
  filter: "blur(30px)",
  position: "absolute",
  height: "100%",
  width: "100%",
  opacity: 0,
  transition: "opacity 300ms ease-in-out",
  zIndex: 0,
});

const MoodTooltip = styled("div", {
  position: "absolute",
  top: "-16px",
  zIndex: 100,
  background: "$bgSecondary",
  fontFamily: "sans-serif-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif",
  fontSize: "14px",
  color: "$btnText",
  borderRadius: "8px",
  padding: "3px 10px",
  display: "none"
});

const MoodLabel = styled("label", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  cursor: "pointer",

  "& input": {
    // Hide the default raio select buttons
    position: "absolute",
    opacity: 0,

    [`&:checked ~ ${MoodTooltip}, &:hover ~ ${MoodTooltip}`]: {
      display: "block",
    },

    [`&:checked ~ ${MoodIcon}`]: {
      filter: "blur(0)",
      borderColor: "$borderColor",
      transform: "scale(1.315)",
      opacity: 1,
    },

    [`&:checked ~ ${GlowingBackround}`]: {
      opacity: 1,
    },
  },
});

export type Props = {
  moods: MoodList;
  handleChange?: (mood: Mood) => void;
}

export const MoodSelector: React.FC<Props> = ({
  moods,
  handleChange = () => {},
}) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const mood = moods.find((m) => m.id === e.target.value);
    if (!mood) {
      throw new Error(`Could not find mood with id ${e.target.value}`);
    }
    handleChange(mood);
  };
  return (
    <MoodsContainer>
      {moods.map(({ id, src, label }) => (
        <MoodLabel htmlFor={id} key={id}>
          <input
            type="radio"
            name="mood-selector"
            id={id}
            onChange={onChange}
            value={id}
          />
          <MoodTooltip>{label}</MoodTooltip>
          <MoodIcon>
            <img src={src} alt={label} height="50px" width="px" />
          </MoodIcon>
          <GlowingBackround />
        </MoodLabel>
      ))}
    </MoodsContainer>
  );
};
