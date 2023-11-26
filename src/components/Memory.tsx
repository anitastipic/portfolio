import {useEffect, useState} from "react";

type Card = {
    index: string;
    src: string;
    chosen: boolean;
    className: string;
}


export default function MemoryLogic() {
    const [cards, setCards] = useState<Card[]>([]);

    useEffect(() => {
        setCards(generateCards(10));
    }, []);

    function generateCards(totalCardsPerType: number) {
        const generatedCards: Card[] = [];
        for (let i = 1; i <= totalCardsPerType; i++) {
            generatedCards.push({
                index: `card${i}-1`,
                src: `/memory/card${i}.svg`,
                chosen: false,
                className: "cardimg object contain"
            })
            generatedCards.push({
                index: `card${i}-2}`,
                src: `/memory/card${i}.svg`,
                chosen: false,
                className: "cardimg object contain"
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
        console.log("hey")
        setCards(cards.map((card, index) => {
            console.log(card.chosen)
            if (index === cardIndex) {
                return {...card, chosen: !card.chosen};
            }
            return card;
        }));
    }

    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <div className="grid grid-cols-5 gap-3">
                {cards.map((card, index) => (
                    <div key={index}
                         className={`flex h-[150px] w-[150px] bg-white`}
                         onClick={() => handleCardClick(index)}>
                        {card.chosen &&
                        <img key={index} src={card.src} className={card.className}/>}
                    </div>
                ))}
            </div>
        </div>
    )
}