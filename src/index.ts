import { ChessBoard } from "./domain/chess-game";
import { renderChessBoard } from "./ui/chess-board.component";

const board = new ChessBoard();

const renderContainer = document.getElementById("app-container");

if(renderContainer){
    renderContainer.innerHTML = renderChessBoard(board);}