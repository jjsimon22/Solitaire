
export const createDeck = () => {
    let cardValues = [{ 'n':'A', 'val':1},
        { 'n':'2', 'val':2},
        { 'n':'3', 'val':3},
        { 'n':'4', 'val':4}/*,
        { 'n':'5', 'val':5}/*,
        { 'n':'6', 'val':6},
        { 'n':'7', 'val':7},
        { 'n':'8', 'val':8},
        { 'n':'9', 'val':9},
        { 'n':'10', 'val':10},
        { 'n':'J', 'val':11},
        { 'n':'Q', 'val':12},
        { 'n':'K', 'val':13}*/
    ];

    let suits = [
        {'suit': "hearts", 'color': 'red'},
        {'suit': "diamonds", 'color': 'red'},
        {'suit': "spades", 'color': 'black'},
        {'suit': "clubs", 'color': 'black'}
    ];

    let deck = [];
    suits.forEach(s => {
        cardValues.forEach(cv => {
            deck.push({
                n: cv.n,
                val: cv.val,
                suit: s.suit,
                color: s.color
            });
        });
    });
    return deck;
}

export const shuffle = (arr) => {
    const swaps = 100;

    for (let i=0; i<swaps; i++) {
        let x = Math.floor(Math.random() * arr.length);
        let y = Math.floor(Math.random() * arr.length);

        let t = arr[x];
        arr[x] = arr[y];
        arr[y] = t;
    }
    return arr.slice();
}

export const getTotalCardCount = () => {
    return createDeck().length;
}