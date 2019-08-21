
const deck = [
{"val": 1, "suit": "spades", "n": "ace", "color": "black", "abbr": "A", "unicode": "1F0A1"},
{"val": 2, "suit": "spades", "n": "two", "color": "black", "abbr": "2", "unicode": "1F0A2"},
{"val": 3, "suit": "spades", "n": "three", "color": "black", "abbr": "3", "unicode": "1F0A3"},
{"val": 4, "suit": "spades", "n": "four", "color": "black", "abbr": "4", "unicode": "1F0A4"},
{"val": 5, "suit": "spades", "n": "five", "color": "black", "abbr": "5", "unicode": "1F0A5"},
{"val": 6, "suit": "spades", "n": "six", "color": "black", "abbr": "6", "unicode": "1F0A6"},
{"val": 7, "suit": "spades", "n": "seven", "color": "black", "abbr": "7", "unicode": "1F0A7"},
{"val": 8, "suit": "spades", "n": "eight", "color": "black", "abbr": "8", "unicode": "1F0A8"},
{"val": 9, "suit": "spades", "n": "nine", "color": "black", "abbr": "9", "unicode": "1F0A9"},
{"val": 10, "suit": "spades", "n": "ten", "color": "black", "abbr": "10", "unicode": "1F0AA"},
{"val": 11, "suit": "spades", "n": "jack", "color": "black", "abbr": "J", "unicode": "1F0AB"},
{"val": 12, "suit": "spades", "n": "queen", "color": "black", "abbr": "Q", "unicode": "1F0AD"},
{"val": 13, "suit": "spades", "n": "king", "color": "black", "abbr": "K", "unicode": "1F0AE"},
{"val": 1, "suit": "hearts", "n": "ace", "color": "red", "abbr": "A", "unicode": "1F0B1"},
{"val": 2, "suit": "hearts", "n": "two", "color": "red", "abbr": "2", "unicode": "1F0B2"},
{"val": 3, "suit": "hearts", "n": "three", "color": "red", "abbr": "3", "unicode": "1F0B3"},
{"val": 4, "suit": "hearts", "n": "four", "color": "red", "abbr": "4", "unicode": "1F0B4"},
{"val": 5, "suit": "hearts", "n": "five", "color": "red", "abbr": "5", "unicode": "1F0B5"},
{"val": 6, "suit": "hearts", "n": "six", "color": "red", "abbr": "6", "unicode": "1F0B6"},
{"val": 7, "suit": "hearts", "n": "seven", "color": "red", "abbr": "7", "unicode": "1F0B7"},
{"val": 8, "suit": "hearts", "n": "eight", "color": "red", "abbr": "8", "unicode": "1F0B8"},
{"val": 9, "suit": "hearts", "n": "nine", "color": "red", "abbr": "9", "unicode": "1F0B9"},
{"val": 10, "suit": "hearts", "n": "ten", "color": "red", "abbr": "10", "unicode": "1F0BA"},
{"val": 11, "suit": "hearts", "n": "jack", "color": "red", "abbr": "J", "unicode": "1F0BB"},
{"val": 12, "suit": "hearts", "n": "queen", "color": "red", "abbr": "Q", "unicode": "1F0BD"},
{"val": 13, "suit": "hearts", "n": "king", "color": "red", "abbr": "K", "unicode": "1F0BE"},
{"val": 1, "suit": "diamonds", "n": "ace", "color": "red", "abbr": "A", "unicode": "1F0C1"},
{"val": 2, "suit": "diamonds", "n": "two", "color": "red", "abbr": "2", "unicode": "1F0C2"},
{"val": 3, "suit": "diamonds", "n": "three", "color": "red", "abbr": "3", "unicode": "1F0C3"},
{"val": 4, "suit": "diamonds", "n": "four", "color": "red", "abbr": "4", "unicode": "1F0C4"},
{"val": 5, "suit": "diamonds", "n": "five", "color": "red", "abbr": "5", "unicode": "1F0C5"},
{"val": 6, "suit": "diamonds", "n": "six", "color": "red", "abbr": "6", "unicode": "1F0C6"},
{"val": 7, "suit": "diamonds", "n": "seven", "color": "red", "abbr": "7", "unicode": "1F0C7"},
{"val": 8, "suit": "diamonds", "n": "eight", "color": "red", "abbr": "8", "unicode": "1F0C8"},
{"val": 9, "suit": "diamonds", "n": "nine", "color": "red", "abbr": "9", "unicode": "1F0C9"},
{"val": 10, "suit": "diamonds", "n": "ten", "color": "red", "abbr": "10", "unicode": "1F0CA"},
{"val": 11, "suit": "diamonds", "n": "jack", "color": "red", "abbr": "J", "unicode": "1F0CB"},
{"val": 12, "suit": "diamonds", "n": "queen", "color": "red", "abbr": "Q", "unicode": "1F0CD"},
{"val": 13, "suit": "diamonds", "n": "king", "color": "red", "abbr": "K", "unicode": "1F0CE"},
{"val": 1, "suit": "clubs", "n": "ace", "color": "black", "abbr": "A", "unicode": "1F0D1"},
{"val": 2, "suit": "clubs", "n": "two", "color": "black", "abbr": "2", "unicode": "1F0D2"},
{"val": 3, "suit": "clubs", "n": "three", "color": "black", "abbr": "3", "unicode": "1F0D3"},
{"val": 4, "suit": "clubs", "n": "four", "color": "black", "abbr": "4", "unicode": "1F0D4"},
{"val": 5, "suit": "clubs", "n": "five", "color": "black", "abbr": "5", "unicode": "1F0D5"},
{"val": 6, "suit": "clubs", "n": "six", "color": "black", "abbr": "6", "unicode": "1F0D6"},
{"val": 7, "suit": "clubs", "n": "seven", "color": "black", "abbr": "7", "unicode": "1F0D7"},
{"val": 8, "suit": "clubs", "n": "eight", "color": "black", "abbr": "8", "unicode": "1F0D8"},
{"val": 9, "suit": "clubs", "n": "nine", "color": "black", "abbr": "9", "unicode": "1F0D9"},
{"val": 10, "suit": "clubs", "n": "ten", "color": "black", "abbr": "10", "unicode": "1F0DA"},
{"val": 11, "suit": "clubs", "n": "jack", "color": "black", "abbr": "J", "unicode": "1F0DB"},
{"val": 12, "suit": "clubs", "n": "queen", "color": "black", "abbr": "Q", "unicode": "1F0DD"},
{"val": 13, "suit": "clubs", "n": "king", "color": "black", "abbr": "K", "unicode": "1F0DE"}
]

export const createDeck = () => {
    let d = deck.slice();
    d.forEach(c => {
        c.moveable = {
            from: "discard",
            status: false
        }
    })
    return deck.slice();
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
    return deck.length;
}