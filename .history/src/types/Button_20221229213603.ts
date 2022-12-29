import { ReactNode } from "react";

export default interface IButtonProps  {
  children: ReactNode;
  type: string;
  size: string;
  onClick?: () => void;
}
