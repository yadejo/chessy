import { Color } from "./color";

export type PieceKind = "knight" | "pown" | "rook" | "king" | "queen" | "bishop";

export type PiecePosition = {
    file: "a"|"b"|"c"|"d"|"e"|"f"|"g"|"h",
    rank: 1 | 2 | 3 | 4 | 5 |6 | 7  | 8,
}

export abstract class Piece {
    readonly kind: PieceKind;
    readonly value: number;
    readonly color: Color;
    constructor(kind: PieceKind, value: number, position: PiecePosition, color: Color) {
        this.kind = "king";
        this.value = Infinity;
        this.color = color;
    }
}

export class King extends Piece {
    constructor(position: PiecePosition, color: Color) {
       super("king", Infinity, position, color)
    }
}

export class Pown extends Piece {
    constructor(position: PiecePosition, color: Color) {
        super("pown", 1, position, color)
     }
}

export class Bishop extends Piece {
    constructor(position: PiecePosition, color: Color) {
        super("bishop", 3, position, color)
     }
}

export class Knight extends Piece {
    constructor(position: PiecePosition, color: Color) {
        super("knight", 3, position, color)
     }
}

export class Rook extends Piece {
    constructor(position: PiecePosition, color: Color) {
        super("rook", 5, position, color)
     }
}

export class Queen extends Piece {
    constructor(position: PiecePosition, color: Color) {
        super("queen", 5, position, color)
     }
}