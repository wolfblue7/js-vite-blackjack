/**
 * Recibe una carta como string y retorna el valor
 * @param {String} carta Ejemplo: A retorna 11 o 2A retorna 2
 * @returns {Number} Retorna el valor de la carta en numero
 */

export const valorCarta = ( carta ) => {

    if ( !carta || carta.length === 0 ) 
        throw new Error('La carta no puede estar vacia');

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}