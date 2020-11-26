import "./ChessBoardRank.css";
import React from "react";

export type ChessBoardRankProps = {
    children: React.ReactNode;
}

export const ChessBoardRank = (props: ChessBoardRankProps) => (
    <div className="ChessBoardRank">{props.children}</div>
);
