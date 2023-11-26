import {useEffect, useState} from "react";

type Card = {
    index: string;
    src: string;
    chosen: boolean;
    className: string;
    foundMatch: boolean;
}


export default function MemoryLogic() {
    const [cards, setCards] = useState<Card[]>([]);
    const [openCards, setOpenCards] = useState<number[]>([]);

    useEffect(() => {
        setCards(generateCards(10));
    }, []);


    useEffect(() => {
        if (openCards.length === 2) {
            const [firstIndex, secondIndex] = openCards;
            if (cards[firstIndex].src === cards[secondIndex].src) {
                setCards(prevCards =>
                    prevCards.map((card, index) =>
                        index === firstIndex || index === secondIndex
                            ? {...card, foundMatch: true} : card
                    )
                );
                setOpenCards([]);
            }
        }
    }, [openCards, cards]);

    function generateCards(totalCardsPerType: number) {
        const generatedCards: Card[] = [];
        for (let i = 1; i <= totalCardsPerType; i++) {
            generatedCards.push({
                index: `card${i}-1`,
                src: `/memory/card${i}.svg`,
                chosen: false,
                className: "cardimg object contain",
                foundMatch: false
            })
            generatedCards.push({
                index: `card${i}-2}`,
                src: `/memory/card${i}.svg`,
                chosen: false,
                className: "cardimg object contain",
                foundMatch: false
            })
        }
        shuffleArray(generatedCards);
        return generatedCards;
    }

    function shuffleArray(array: Card[]) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i + 1);
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    function handleCardClick(cardIndex: number) {
        const card = cards[cardIndex];

        if (card.foundMatch || (openCards.length === 2 && openCards.includes(cardIndex))) {
            return;
        }

        if (openCards.length === 2) {
            setCards(prevCards =>
                prevCards.map((prevCard, index) =>
                    openCards.includes(index) ? {...prevCard, chosen: false} : prevCard
                )
            );
            setOpenCards([]);
        }
        setCards(prevCards =>
            prevCards.map((prevCard, index) =>
                index === cardIndex ? {...prevCard, chosen: true} : prevCard
            )
        );
        setOpenCards(prevOpenCards => [...prevOpenCards, cardIndex]);
    }


    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <div className="grid grid-cols-5 gap-3">
                {cards.map((card, index) => (
                    <div key={index}
                         className={`flex h-[150px] w-[150px] bg-white`}
                         onClick={() => handleCardClick(index)}>
                        {card.chosen &&
                            <img key={index} src={card.src}
                                 className={`${card.className} ${card.foundMatch ? " border border-2 border-amber-500" : ""}`}/>}
                    </div>
                ))}
            </div>
        </div>
    )
}