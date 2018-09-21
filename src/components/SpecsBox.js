import React, { Component } from 'react';

import ReviewBox from '../containers/ReviewBox';

// CSS
import '../css/App.css'

class SpecsBox extends Component {
    render() {
        return (
            <div>
                <div
                    className={'text-box'} dangerouslySetInnerHTML={{__html: this.props.product.specs}}
                >
                    
                </div>

                <ReviewBox product={this.props.product}/>
            </div>

        );
    }
}

export default SpecsBox;