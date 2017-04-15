import { connect } from 'react-redux';

import CardModal from './CardModal.jsx';
import { addCard } from '../actions/actions';

const mapStateToProps = (state, { params: { deckId } }) => ({
    card: { deckId }
});

const mapDispatchToProps = dispatch => ({
    onSave: card => dispatch(addCard(card))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardModal);