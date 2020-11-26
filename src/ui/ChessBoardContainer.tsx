import { Square, ChessBoard as ChessBoardModel } from "domain/chess-board";
import React from "react";
import { ChessBoard } from "./components/ChessBoard";
import { ChessBoardRank } from "./components/ChessBoardRank";
import { ChessBoardSquare } from "./components/ChessBoardSquare";

export type ChessBoardContainerProps = {
    chessBoard: ChessBoardModel
}

export const ChessBoardContainer = (props: ChessBoardContainerProps) => {
    const [highlightedSquare, setHighlightedSquare] = React.useState<Square>();

    return (
        <ChessBoard>
            {
                props.chessBoard.squares.map(rank => (
                    <ChessBoardRank>
                        {
                            rank.map(square => <ChessBoardSquare highlighted={highlightedSquare === square} color={square.color} onClick={() => setHighlightedSquare(square)}/>)
                        }
                    </ChessBoardRank>
                ))
            }
        </ChessBoard>
    )
}