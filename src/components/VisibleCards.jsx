import React from 'react';
import { connect } from 'react-redux';
import fuzzysearch from 'fuzzysearch';``

import Card from './Card.jsx';

const matches = (filter, card) => fuzzysearch(filter, card.front) || fuzzysearch(filter, card.back);

const mapStateToProps = ({ cards, cardFilter }, { params: { deckId } }) => ({
    cards: cards.filter(card => card.deckId === deckId && matches(cardFilter, card))
});

const Cards = ({ cards, children }) => (
    <div className="main">
        {cards.map(card => <Card card={card} key={card.id}/>)}
        {children}
    </div>
);

export default connect(mapStateToProps)(Cards);