import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { showAddDeck, filterCards } from '../actions/actions';

const mapDispatchToProps = dispatch => ({
    showAddDeck: () => dispatch(showAddDeck()),
    onFilter: query => dispatch(filterCards(query))
});

const Toolbar = ({ deckId, showAddDeck, onFilter }) => {
    const deckTools = deckId 
        ?
            (<div>
                <Link className="btn" to={`/deck/${deckId}/new`}>&#10010; New Card</Link>
                <Link className="btn" to={`/deck/${deckId}/study`}>&#10010; Study Deck</Link>
                <input 
                    className="search"
                    type="search"
                    placeholder="Search Deck..."
                    onChange={e => onFilter(e.target.value)}
                />
            </div>) 
        : 
            null;

    return (
        <div className="toolbar">
            <div>
                <button onClick={showAddDeck}>&#10010; New Deck</button>
            </div>
            {deckTools}
        </div>
    );
};

export default connect(null, mapDispatchToProps)(Toolbar);