export type Mood = {
  src: string;
  id: string;
  label: string;
}

export type MoodList = Mood[];

type MoodsData = {
  [key: string]: MoodList;
}

export const MOODS_DATA: MoodsData = {
  msFluent: [
    {
      src: "/icons/ms-fluent/terrible.png",
      label: "Terrible",
      id: "terrible",
    },
    {
      src: "/icons/ms-fluent/bad.png",
      label: "Bad",
      id: "bad",
    },
    {
      src: "/icons/ms-fluent/okay.png",
      label: "Okay",
      id: "okay",
    },
    {
      src: "/icons/ms-fluent/fine.png",
      label: "Fine",
      id: "fine",
    },
    {
      src: "/icons/ms-fluent/happy.png",
      label: "Happy",
      id: "happy",
    },
    {
      src: "/icons/ms-fluent/amazing.png",
      label: "Amazing",
      id: "amazing",
    },
  ],
};
