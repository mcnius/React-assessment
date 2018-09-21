import React, { Component } from 'react';

// Components

// Dumb Components
import NameBox from './NameBox';
import PriceBox from './PriceBox';
import RatingBox from "./RatingBox";
import MoreInfo from "./MoreInfoBox";
import Carousel from '../components/Carousel'

// CSS
import '../css/App.css'

class ListItem extends Component {

    render() {

        return (
            <div className={'product-row'}>

                <Carousel
                    images={this.props.product.images}
                />

                <div className={"product-detail"}>
                    <NameBox
                        id={this.props.product.id}
                        name={this.props.product.name}
                        selected={this.props.selected}
                    />

                    <RatingBox
                        id={this.props.product.id}
                        rating={this.props.product.rating}
                        selected={this.props.selected}
                    />

                    <div
                        className={'product-detail__description'}
                    >
                        {this.props.product.description}
                    </div>
                    <div className={"product-detail__buttons"}>
                        <PriceBox
                            id={this.props.product.id}
                            price={this.props.product.price}
                            selected={this.props.selected}
                        />

                        <MoreInfo
                            id={this.props.product.id}
                            selected={this.props.selected}
                        />
                    </div>
                    

                </div>

            </div>
        );
    }
}

export default ListItem;
