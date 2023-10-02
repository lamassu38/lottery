import React, {useState, useEffect} from 'react';
import lotteryData from '../lotteryData';

export default function Main(){
    const [images, setImages] = useState(lotteryData);
    const [selectedCard, setSelectedCard] = useState(null);
    const [allCardsShown, setAllCardsShown] = useState(false);

    function getImage(){
        if(images.length === 0){
            setAllCardsShown(true);
            setSelectedCard(null);
            return;
        }
        const randomIndex = Math.floor(Math.random()* images.length);
        const randomCard = images[randomIndex];
        setSelectedCard(randomCard);

        setImages(prevImages => prevImages.filter(card => card.id !== randomCard.id))
    }
    function restartGame() {
        setImages(lotteryData);
        setSelectedCard(null);
        setAllCardsShown(false);
    }
    useEffect(()=>{
        if(images.length === 0){
            setAllCardsShown(true)
        }
    }, [images])

    return (
        <main>
        <div className='lottery-container'>
            <button className='button' onClick={getImage}>
                    Get a card
            </button>
            {selectedCard && (
                  <img src={`../images/${selectedCard.card}`} alt={selectedCard.title} className='lottery--image' />
            )}
             {allCardsShown && (
                  <p>No more cards, Play again?</p>
             )}
             {allCardsShown && (
                  <button className='button' onClick={restartGame}>
                       Restart
                  </button>
             )}
         </div>
    </main>

    );
}