import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from '../components';

class VideosContainer extends Component {
    onPopupButtonClick() {
        
    }

    render() {
        return(
            <div>
                <Button className="button" text="Video popup" onClick={this.onPopupButtonClick} />
            </div>
        )
    }
}

VideosContainer.displayName = 'VideosContainer';

VideosContainer.propTypes = {

};

export default connect(
    //	Map state to props
    state => ({}),
    //	Bind actions to props
    dispatch => bindActionCreators({}, dispatch)
)(VideosContainer);
