import { Player } from "./player";
import { Piece, PiecePosition } from "./piece";
import { Color } from "./color";

export class ChessBoard {
  squares: Square[][];

  constructor() {
    this.squares = DEFAULT_SQUARES;
  }
}

export class Square {
  color: Color;
  piece: Piece | undefined;

  constructor(color: Color) {
    this.color = color;
  }
}

const DEFAULT_SQUARES = [
  [
    new Square("black"),
    new Square("white"),
    new Square("black"),
    new Square("white"),
    new Square("black"),
    new Square("white"),
    new Square("black"),
    new Square("white"),
  ],
  [
    new Square("white"),
    new Square("black"),
    new Square("white"),
    new Square("black"),
    new Square("white"),
    new Square("black"),
    new Square("white"),
    new Square("black"),
  ],
  [
    new Square("black"),
    new Square("white"),
    new Square("black"),
    new Square("white"),
    new Square("black"),
    new Square("white"),
    new Square("black"),
    new Square("white"),
  ],
  [
    new Square("white"),
    new Square("black"),
    new Square("white"),
    new Square("black"),
    new Square("white"),
    new Square("black"),
    new Square("white"),
    new Square("black"),
  ],
  [
    new Square("black"),
    new Square("white"),
    new Square("black"),
    new Square("white"),
    new Square("black"),
    new Square("white"),
    new Square("black"),
    new Square("white"),
  ],
  [
    new Square("white"),
    new Square("black"),
    new Square("white"),
    new Square("black"),
    new Square("white"),
    new Square("black"),
    new Square("white"),
    new Square("black"),
  ],
  [
    new Square("black"),
    new Square("white"),
    new Square("black"),
    new Square("white"),
    new Square("black"),
    new Square("white"),
    new Square("black"),
    new Square("white"),
  ],
  [
    new Square("white"),
    new Square("black"),
    new Square("white"),
    new Square("black"),
    new Square("white"),
    new Square("black"),
    new Square("white"),
    new Square("black"),
  ],
];
