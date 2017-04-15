export const addDeck = name => ({ type: 'ADD_DECK', name });
export const showAddDeck = () => ({ type: 'SHOW_ADD_DECK' });
export const hideAddDeck = () => ({ type: 'HIDE_ADD_DECK' });

export const addCard = card => ({ type: 'ADD_CARD', card });
export const updateCard = card => ({ type: 'UPDATE_CARD', card });
export const deleteCard = cardId => ({ type: 'DELETE_CARD', cardId });

export const filterCards = query => ({ type: 'FILTER_CARDS', query });

export const setShowBack = back => ({ type: 'SHOW_BACK', back });