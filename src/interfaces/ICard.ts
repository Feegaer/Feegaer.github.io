import type { ITitleAndDescription } from "./ITitleAndDescription.ts";

export interface ICard extends ITitleAndDescription{
  image?: string,
  buttonHref: string,
  buttonText: string,
  buttonIcon?: any,
  index?: number
}