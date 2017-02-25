import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Button } from './';

export default class Navigation extends Component {
    render() {
        return (
            <div className="main-navigation">
                <Button>
                    <Link to="/search" activeClassName="active">
                        Search gitHub user
                    </Link>
                </Button>
                <Button>
                    <Link to="/videos" activeClassName="active">
                        Videos
                    </Link>
                </Button>
            </div>
        );
    }
}