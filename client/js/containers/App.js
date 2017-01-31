import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUsers } from '../actions/users'
import { SearchContainer } from '../containers';

class App extends Component {
    render() {
        return (
            <div className="app-wrapper">
                <SearchContainer />
                { this.props.children }
            </div>
        );
    }
}

App.displayName = 'App';

App.propTypes = {
    getUsers: PropTypes.func.isRequired
};

export default connect(
    //	Map state to props
    () => ({}),
    //	Bind actions to props
    dispatch => bindActionCreators({
        getUsers
    }, dispatch)
)(App);
