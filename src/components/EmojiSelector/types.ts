export interface Emoji {
  /**
   * The emoji icon
   * 
   * eg: 😂, 😃, 🧘🏻‍♂️, 🌍
   */
  value: string;
  /**
   * Each emoji should have a unique identifier
   */
  id: string;
}

export type EmojiList = Emoji[];