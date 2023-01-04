export interface IGameItem {
  image: string;
  title: string;
  genres: string[];
  video: string;
  price: number;
  id: number;
  count: number;
  description: string;
  some?: number;
}

export default interface IGameItemProps {
  game: IGameItem;
}
