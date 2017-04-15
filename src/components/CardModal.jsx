import React from 'react';
import { Link, hashHistory } from 'react-router';

class CardModal extends React.Component {
    componentDidUpdate() {
        this.refs.front.focus();
    }

    onSave = e => {
        const { front, back } = this.refs;

        this.props.onSave({
            ...this.props.card,
            front: front.value, 
            back:back.value
         });
        hashHistory.push(`/deck/${this.props.card.deckId}`)
    }

    onDelete = e => {
        this.props.onDelete(this.props.card.id);
        hashHistory.push(`/deck/${this.props.card.deckId}`)
    }

    render() {
        let { card, onDelete } = this.props;
        return(
            <div className="modal">
                <h1>{ onDelete ? 'New' : 'Edit'} Card</h1>
                <label>Card Front</label>
                <textarea ref="front" defaultValue={card.front}></textarea>
                <label>Card Back</label>
                <textarea ref="back" defaultValue={card.back}></textarea>
                <p>
                    <button onClick={this.onSave}>Save Card</button>
                    <Link className="btn" to={`/deck/${card.deckId}`}>Cancel</Link>
                    {
                        onDelete
                            ? <button className="delete" onClick={this.onDelete}>Delete Card</button>
                            : null
                    }
                </p>
            </div>
        );
    }
}

export default CardModal;