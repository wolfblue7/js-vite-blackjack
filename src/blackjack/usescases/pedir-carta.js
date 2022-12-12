
/**
 * Recibe un arreglo de string(una baraja), retorna una carta
 * @param {Array<String>} deck  
 * @returns {String} Retornar la ultima carta obtenida
 */
// Esta función me permite tomar una carta
export const pedirCarta = (deck) => {
    if ( !deck || deck.length === 0 ) 
    throw new Error('Deck esta vacio');

    const carta = deck.pop();
    return carta;
}