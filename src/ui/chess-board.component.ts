import { ChessBoard } from "../domain/chess-game";
import { Color } from "../domain/color";

const Board = (props: { children: string }) => `
    <style>
        .chessboard {
            width: 500px;
            height: 500px;
            display: flex;
            flex-direction: column-reverse; // a1 square is  bottom-left corner
        }
    </style>
    <div class="chessboard">${props.children}</div>
`;

const Rank = (props: { children: string }) => `
    <style>
        .rank {
            display: flex;
            flex: 1;
            flex
        }
    </style>
    <div class="rank">${props.children}</div>
`;

const Square = (props: { color: Color }) => `
    <style>
        .square {
            flex: 1;
            height: 100%;
            flex-
        }

        .square__white {
            background-color: #ECDBC4;
        }

        .square__black {
            background-color: #592929;
        }
    </style>
    <div class="square square__${props.color}"></div>
`;

export function renderChessBoard(chessBoard: ChessBoard) {
  return Board({
    children: stringArrayToString(
      chessBoard.squares.map((rank) =>
        Rank({
          children: stringArrayToString(rank.map((square) => Square(square))),
        })
      )
    ),
  });
}

const stringArrayToString = (array: string[]) =>
  array.reduce((a, b) => a.concat(b));
