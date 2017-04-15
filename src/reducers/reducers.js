export const decks = (state = [], action) => {
    switch (action.type) {
        case 'ADD_DECK':
            const newDeck = { name: action.name, id: +new Date() };
            return state.concat([newDeck]);

        default:
            return state;
    }
}

export const addingDeck = (state = false, action) => {
    switch (action.type) {
        case 'SHOW_ADD_DECK': return true;
        case 'HIDE_ADD_DECK': return false;
        default: return state;
    }
}

export const cards = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CARD':
            const newCard = {
                ...action.card,
                score: 1,
                id: +new Date()
            };
            return state.concat([newCard]);

        case 'UPDATE_CARD':
            const cardUpdate = action.card;
            return state.map(card => card.id !== cardUpdate.id 
                ? card
                : { ...card, ...cardUpdate
            });

        case 'DELETE_CARD':
            return state.filter(card => card.id !== action.cardId);

        default:
            return state;
    }
};

export const cardFilter = (state = '', action) => {
    switch (action.type) {
        case 'FILTER_CARDS':
            return action.query;
        default: return state;
    }
};

export const showBack = (state = false, action) => {
    switch (action.type) {
        case 'SHOW_BACK':
            return action.back || false;
        default: return state;
    }
};