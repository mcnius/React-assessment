import React, { Component } from 'react';
import StarRatings from '../../node_modules/react-star-ratings';

// CSS
import '../css/App.css'

class RatingBox extends Component {
    render() {
        return (
            <div
                className={'product-detail__rating'}
                onClick={this.props.selected.bind(this, this.props.id)}
            >
                <StarRatings
                    rating={this.props.rating}
                    numberOfStars={5}
                    starRatedColor={'rgb(255,194,25)'}
                />
            </div>
        );
    }
}

export default RatingBox;