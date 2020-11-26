import { bootstrapUI } from "./ui";
import { ChessBoard } from "./domain/chess-board";
// import { renderChessBoard } from "./ui/chess-board.component";

const board = new ChessBoard();

const renderContainer = document.getElementById("app-container");

if (renderContainer)
    bootstrapUI(board, renderContainer);