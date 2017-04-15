import React from 'react';
import { connect } from 'react-redux';

import Sidebar from './Sidebar.jsx';
import Toolbar from './Toolbar.jsx';

const mapStateToProps = (state, { params: { deckId } }) => ({
    deckId
});

const Main = ({ deckId, children }) => {
    return(
        <div className="app">
            <Toolbar deckId={deckId}/>
            <Sidebar/>
            {children}
        </div>
    );
};

export default connect(mapStateToProps)(Main);