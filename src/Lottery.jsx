import { useState } from "react";


export default function Lottery() {
    let [tvalue, setTValue] = useState(0);

    function ticketValue() {
        tvalue = Math.floor(100 + Math.random() * 900);
        setTValue(tvalue);
    }

    let sumDigit = (num) => {
        let sum = 0;
        while (num > 0) {
            sum += num % 10; // Get the last digit
            num = Math.floor(num / 10); // Remove the last digit
        }
        return sum;
    }

    let isWinnig = sumDigit(tvalue) == 15;

    return (
        <>
            {/* <h2>Lottery { sumDigit(tvalue) == 15 ? "'Congratulations, you won'" : ""}!</h2> */}
            <h2>Lottery { isWinnig && "'Congratulations, you won!'" }</h2>
            <p>Lottery Ticket = {tvalue}</p>
            <button onClick={ticketValue}>Get New Ticket</button>
        </>
    );
}