import React, { Component } from 'react';
import ListItem from './ListItem';

// CSS
import '../css/App.css'

class List extends Component {

    render() {
        return (
            <div>
                {this.props.product.map((item, index) =>
                    <ListItem
                        key={index}
                        product={item}
                        selected={this.props.selected}
                        onDemand={this.props.onDemand}
                    />
                )}
            </div>
        );
    }
}

export default List;