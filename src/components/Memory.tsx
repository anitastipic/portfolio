import React, {useEffect, useState} from "react";


export default function Memory() {
    const [rows, setRows] = useState<React.ReactElement[][]>([]);
    const totalCards = 10;
    const elementsPerRow = 5;

    useEffect(() => {
        const fullRows: React.ReactElement[][] = [];
        let currentRow: React.ReactElement[] = [];
        const allCards: React.ReactElement[] = [];

        for(let i = 1; i <= totalCards; i++) {
            for(let j = 0; j <= 1; j++) {
                allCards.push(<div key={`card${i}-${j}`} className="m-2 bg-white h-[15vh] w-[15vh] flex justify-center items-center"><img className="h-[10vh] w-auto" src={`/memory/card${i}.svg`} alt={`card image ${i}`}/></div>)
            }
        }

        shuffleArray(allCards);

        for(let i = 0; i <= allCards.length; i++) {
            currentRow.push(allCards[i]);
            if(currentRow.length >= elementsPerRow) {
                fullRows.push([...currentRow]);
                currentRow = [];
            }
        }


        setRows(fullRows)
    }, [totalCards, elementsPerRow]);


    function shuffleArray(array: React.ReactElement[]) {
        for(let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i + 1);
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    return (
        <div className="bg-black h-screen p-10 flex items-center justify-center">
            <div className="flex flex-col">
            {rows.map((row, index) => (
                <div key={`memoryrow-${index}`} className=" flex flex-row h-[15vh] mb-4">
                    {row}
                </div>
            ))}
            </div>
        </div>
    );
}
