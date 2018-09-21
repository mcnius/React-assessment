import React, { Component } from 'react';

import Carousel from '../components/Carousel'

// CSS
import '../css/App.css'

class SuggestBox extends Component {
    render() {
        return (
            <div
                className={'suggestion-slideshows'}
            >
                {this.props.product.map((item, index) =>
                    <Carousel
                        key={index}
                        images={item.suggestImages}
                    />
                )}

            </div>
        );
    }
}

export default SuggestBox;
