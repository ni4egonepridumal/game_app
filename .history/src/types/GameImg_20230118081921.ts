import IGameItemProps from "./GameItem"

// export interface IGameItem {
//   image: string;
//   title: string;
//   genres: string[];
//   video: string;
//   price: number;
//   id: number;
//   count: number;
//   description: string;
// }


export default interface GameImgProps {
  game: IGameItemProps;
  onClick?: () => void;
}
