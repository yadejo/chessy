import { Bishop, King, Knight, Piece, Pown, Queen, Rook } from "./piece";
import { Color } from "./color";


export class Player {
  color: Color;

  constructor(color: Color) {
      this.color = color;
  }
}


const INITIAL_PIECES_light: Piece[] = [
    new Pown({file: "a", rank: 2}, "light"),
    new Pown({file: "b", rank: 2}, "light"),
    new Pown({file: "c", rank: 2}, "light"),
    new Pown({file: "d", rank: 2}, "light"),
    new Pown({file: "e", rank: 2}, "light"),
    new Pown({file: "f", rank: 2}, "light"),
    new Pown({file: "g", rank: 2}, "light"),
    new Pown({file: "h", rank: 2}, "light"),
    new Rook({file: "a", rank: 1}, "light"),
    new Knight({file: "b", rank: 1}, "light"),
    new Bishop({file: "c", rank: 1}, "light"),
    new Queen({file: "d", rank: 1}, "light"),
    new King({file: "e", rank: 1}, "light"),
    new Bishop({file: "f", rank: 1}, "light"),
    new Knight({file: "g", rank: 1}, "light"),
    new Rook({file: "h", rank: 1}, "light"),
];

const INITIAL_PIECES_dark: Piece[] = [
    new Pown({file: "a", rank: 7}, "dark"),
    new Pown({file: "b", rank: 7}, "dark"),
    new Pown({file: "c", rank: 7}, "dark"),
    new Pown({file: "d", rank: 7}, "dark"),
    new Pown({file: "e", rank: 7}, "dark"),
    new Pown({file: "f", rank: 7}, "dark"),
    new Pown({file: "g", rank: 7}, "dark"),
    new Pown({file: "h", rank: 7}, "dark"),
    new Rook({file: "a", rank: 8}, "dark"),
    new Knight({file: "b", rank: 8}, "dark"),
    new Bishop({file: "c", rank: 8}, "dark"),
    new Queen({file: "d", rank: 8}, "dark"),
    new King({file: "e", rank: 8}, "dark"),
    new Bishop({file: "f", rank: 8}, "dark"),
    new Knight({file: "g", rank: 8}, "dark"),
    new Rook({file: "h", rank: 8}, "dark"),
];
