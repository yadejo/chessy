import "./ChessBoardSquare.css";
import { Color } from "domain/color";
import React from "react"

export type ChessBoardSquareProps = {
    color: Color;
    highlighted: boolean;
    onClick: ()=>void;
}

export const ChessBoardSquare = (props: ChessBoardSquareProps) => {
    return (
        <div 
            onClick={props.onClick}
            className={`ChessBoardSquare ChessBoardSquare__${props.color} ` + (props.highlighted ? "ChessBoardSquare__highlighted" : "")}></div>
    )
};
