import "./ChessBoard.css";

import React from "react"

export type ChessBoardProps = {
    children: React.ReactNode;
}

export const ChessBoard = (props: ChessBoardProps) => (
    <div className="ChessBoard">{props.children}</div>
);

