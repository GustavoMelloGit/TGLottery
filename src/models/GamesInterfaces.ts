export interface GameProps {
  type: string;
  numbers: number[];
  date: number;
  id: number;
}

export interface IGames {
  game: GameProps;
  cartGames: GameProps[];
  savedGames: GameProps[];
  totalPrice: number;
}

export interface INumberProps {
  index: number;
  max: number;
}
