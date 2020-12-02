import { Bishop, King, Knight, Piece, Pown, Queen, Rook } from "./piece";
import { Color } from "./color";


export class Player {
  color: Color;
  pieces: Piece[];

  constructor(color: Color) {
      this.color = color;
      this.pieces = color === "white" ? INITIAL_PIECES_WHITE : INITIAL_PIECES_BLACK;
  }
}


const INITIAL_PIECES_WHITE: Piece[] = [
    new Pown({file: "a", rank: 2}, "white"),
    new Pown({file: "b", rank: 2}, "white"),
    new Pown({file: "c", rank: 2}, "white"),
    new Pown({file: "d", rank: 2}, "white"),
    new Pown({file: "e", rank: 2}, "white"),
    new Pown({file: "f", rank: 2}, "white"),
    new Pown({file: "g", rank: 2}, "white"),
    new Pown({file: "h", rank: 2}, "white"),
    new Rook({file: "a", rank: 1}, "white"),
    new Knight({file: "b", rank: 1}, "white"),
    new Bishop({file: "c", rank: 1}, "white"),
    new Queen({file: "d", rank: 1}, "white"),
    new King({file: "e", rank: 1}, "white"),
    new Bishop({file: "f", rank: 1}, "white"),
    new Knight({file: "g", rank: 1}, "white"),
    new Rook({file: "h", rank: 1}, "white"),
];

const INITIAL_PIECES_BLACK: Piece[] = [
    new Pown({file: "a", rank: 7}, "black"),
    new Pown({file: "b", rank: 7}, "black"),
    new Pown({file: "c", rank: 7}, "black"),
    new Pown({file: "d", rank: 7}, "black"),
    new Pown({file: "e", rank: 7}, "black"),
    new Pown({file: "f", rank: 7}, "black"),
    new Pown({file: "g", rank: 7}, "black"),
    new Pown({file: "h", rank: 7}, "black"),
    new Rook({file: "a", rank: 8}, "black"),
    new Knight({file: "b", rank: 8}, "black"),
    new Bishop({file: "c", rank: 8}, "black"),
    new Queen({file: "d", rank: 8}, "black"),
    new King({file: "e", rank: 8}, "black"),
    new Bishop({file: "f", rank: 8}, "black"),
    new Knight({file: "g", rank: 8}, "black"),
    new Rook({file: "h", rank: 8}, "black"),
];
