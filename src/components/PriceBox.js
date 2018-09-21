import React, { Component } from 'react';

// CSS
import '../css/App.css'

class PriceBox extends Component {
    render() {
        return (
            <div
                className={"product-detail__price"}
                onClick={this.props.selected.bind(this, this.props.id)}
            >
                {this.props.price}€
            </div>
        );
    }
}

export default PriceBox;