import React from "react";
import ReactDOM from "react-dom";
import { ChessBoard } from "./components/ChessBoard";
import { ChessBoard as ChessBoardModel } from "domain/chess-board";
import { ChessBoardContainer } from "./ChessBoardContainer";

export const bootstrapUI = (chessBoard: ChessBoardModel, container: HTMLElement) => {
    ReactDOM.render(<ChessBoardContainer chessBoard={chessBoard} />, container);
}