import React, { Component } from 'react';

// CSS
import '../css/App.scss'

class MoreInfo extends Component {
    render() {
        return (
            <div
                className={'product-detail__more-info-link'}
                onClick={this.props.selected.bind(this, this.props.id)}
            >
                More Info
            </div>
        );
    }
}

export default MoreInfo;