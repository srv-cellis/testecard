function flipCard(card) {
    // verifica se esta virad
    if (card.classList.contains('flipped')) {
        return;
    }
    
    //aq a carta vira
    card.classList.add('flipped');
    

    const cardBack = card.querySelector('.card-back');
    

    if (card.querySelector('.card-front').textContent === '?') {
        if (cardBack && card.querySelector('.card-back').parentNode.parentNode.textContent.includes('Carta 1')) {
            cardBack.textContent = "Parabéns, você ganhou + 1 hora de trabalho!";
        } else if (cardBack && card.querySelector('.card-back').parentNode.parentNode.textContent.includes('Carta 2')) {
            cardBack.textContent = "Parabéns, você ganhou - 2 horas de trabalho!";
        } else if (cardBack && card.querySelector('.card-back').parentNode.parentNode.textContent.includes('Carta 3')) {
            cardBack.textContent = "Parabéns, você está demitido!";
        }
    }
}
