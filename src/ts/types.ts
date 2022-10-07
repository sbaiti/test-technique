import { MouseEventHandler } from "react";

export type Bar = {
  className: string;
  width: number;
  label: string;
}
export type button = {
  onClick: MouseEventHandler<HTMLDivElement>,
  label: string;
}
