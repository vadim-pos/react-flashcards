import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as actions from '../actions/actions';

const mapStateToProps = ({decks, addingDeck}) => ({ decks, addingDeck });
const mapDispatchToProps = (dispatch) => ({
    addDeck: name => dispatch(actions.addDeck(name)),
    hideAddDeck: () => dispatch(actions.hideAddDeck())
});

class Sidebar extends React.Component {
    componentDidUpdate() {
        const addElement = this.refs.add;
        if (addElement) { addElement.focus(); }
    }

    createDeck = e => {
        if (e.which !== 13) { return; }

        const name = this.refs.add.value;
        this.props.addDeck(name);
        this.props.hideAddDeck();
    }

    render() {
        const props = this.props;

        return(
            <div className="sidebar">
                <h2>All Decks</h2>
                <ul>
                    {props.decks.map((deck, i) =>
                        <li key={i}>
                            <Link to={`/deck/${deck.id}`}>{deck.name}</Link>
                        </li>
                    )}
                </ul>
                {props.addingDeck && <input ref='add' onKeyPress={this.createDeck}/>}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);