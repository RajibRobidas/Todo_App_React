import { useState } from "react";

export default function LudoBoard() {
    let [moves, setMove] = useState({blue:0, yellow:0, green: 0, red:0});
    let [arr, setArr] = useState(["no moves"]);

    let updateBlue = () => {
        // console.log(`moves.blue = ${moves.blue}`);
        // setMove((preMoves) => {
        //     return { ...preMoves, blue: preMoves.blue+1};
        // });

        setArr((preArr) => {
            return [...preArr, "blue moves"];
        });
        console.log(arr);
    };

    let updateYellow = () => {
        // console.log(`moves.yellow = ${moves.yellow}`);
        setMove((preMoves) => {
            return { ...preMoves, yellow: preMoves.yellow+1};
        });
    };

    return (
        <div>
            <p>Game Begins!</p>
            <div className="board">
                <p>Blue moves = {moves.blue}</p>
                <p>{arr}</p>
                <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>+1</button>
                <p>Yellow moves = {moves.yellow}</p>
                <button style={{ backgroundColor: "yellow" }} onClick={updateYellow}>+1</button>
                <p>Green moves = {moves.green}</p>
                <button style={{ backgroundColor: "green" }}>+1</button>
                <p>Red moves = {moves.red}</p>
                <button style={{ backgroundColor: "red" }}>+1</button>
            </div>
        </div>
    );
}