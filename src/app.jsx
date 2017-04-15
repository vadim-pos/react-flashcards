import './scss/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import * as localStore from './storage/localStorage';

/* ----- Components ----- */
import Main from './components/Main.jsx';
import VisibleCards from './components/VisibleCards.jsx';
import NewCardModal from './components/NewCardModal.jsx';
import EditCardModal from './components/EditCardModal.jsx';
import StudyModal from './components/StudyModal.jsx';

/* ----- Redux ----- */
import * as reducers from './reducers/reducers';
reducers.routing = routerReducer;

const store = createStore(combineReducers(reducers), localStore.get());
const history = syncHistoryWithStore(hashHistory, store);

function run() {
    const state = store.getState();
    localStore.set(state, ['decks', 'cards']);

    ReactDOM.render(
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={Main}>
                    <Route path="/deck/:deckId" component={VisibleCards}>
                        <Route path="/deck/:deckId/new" component={NewCardModal}/>
                        <Route path="/deck/:deckId/edit/:cardId" component={EditCardModal}/>
                        <Route path="/deck/:deckId/study" component={StudyModal}/>
                    </Route>
                </Route>
            </Router>
        </Provider>,
        document.getElementById('app')
    );
}

run();
store.subscribe(() => {
    run();
    // console.log(store.getState());
});