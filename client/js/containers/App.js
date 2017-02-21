import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Navigation } from '../components';

class App extends Component {
    render() {
        return (
            <div className="app-wrapper">
                <Navigation />
                { this.props.children }
            </div>
        );
    }
}

App.displayName = 'App';

export default connect(
    //	Map state to props
    () => ({}),
    //	Bind actions to props
    dispatch => bindActionCreators({}, dispatch)
)(App);
