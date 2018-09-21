import React, { Component } from 'react';

import ReviewBox from '../containers/ReviewBox'

// CSS
import '../css/App.css'


class CapacityBox extends Component {
    render() {
        return (
            <div>

                <div
                    className={'text-box'} dangerouslySetInnerHTML={{__html: this.props.product.capacity}}
                >

                </div>

                <ReviewBox product={this.props.product}/>
            </div>
        );
    }
}

export default CapacityBox;