import { connect } from 'react-redux';

import { updateCard, deleteCard } from '../actions/actions';
import CardModal from './CardModal.jsx';

const mapStateToProps = ({ cards }, { params: { cardId } }) => ({
    card: cards.filter(card => card.id === +cardId)[0]
});

const mapDispatchToProps = dispatch => ({
    onSave: card => dispatch(updateCard(card)),
    onDelete: cardId => dispatch(deleteCard(cardId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardModal);