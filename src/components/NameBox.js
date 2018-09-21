import React, { Component } from 'react';

// CSS
import '../css/App.css'

class NameBox extends Component {
    render() {
        return (
            <div
                className={"product-detail__name"}
                onClick={this.props.selected.bind(this, this.props.id)}
            >
                {this.props.name}
            </div>
        );
    }
}

export default NameBox;
