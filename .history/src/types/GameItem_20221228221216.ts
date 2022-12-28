 interface IGameItem {
    image: string;
    title: string;
    genres: string[];
    video: string;
    price: number;
    id: number;
    description: string;
  }
  
  export default interface IGameItemProps {
    game: IGameItem;
  }