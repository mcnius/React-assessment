import React, { Component } from 'react';
import '../css/App.css';
// JSX's Products
import products from '../products.js';
// Dumb Components
import List from '../components/List';
import Carousel from '../components/Carousel'
import StarRatings from '../../node_modules/react-star-ratings';
// CSS
import '../css/App.css'

//Statefull Components
import SpecificBoxes from './SpecificBoxes';
import SuggestBox from '../components/SuggestBox';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: products().data,
            selected: false,
            id: -1
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleToList = this.handleToList.bind(this);

    } // Fin del constructor

    componentWillMount() {

        let product = this.state.product;

        let x = 0;
        let i, j;
        let media;
        let integer;

        for(i = 0; i < product.length; i++) {
            for(j = 0; j < product[i].reviews.length; j++){
                x = x + product[i].reviews[j].reviewRating;
            }
            media = x/j+1;
            integer = parseInt(media, 10);
            product[i].rating = integer;
            x = 0;
        }

        this.setState({
            product
        });
    }

    handleClick(id){

        this.setState({
            selected: !this.state.selected,
            id
        });
    }

    handleToList(){

        this.setState({
            selected: !this.state.selected,
            id: 0
        });
    }


    render() {


        const product = this.state.product;
        const selectedProduct = product[this.state.id];

        // function
        // let nonSelectedProducts = this.state.product;
        // nonSelectedProducts.splice(nonSelectedProducts.indexOf(selectedProduct), 1);
        // product.splice(product.indexOf(selectedProduct),1);

        function nonSelected(products, selectedProducts){

            let newArray = products.slice();

            newArray.splice(newArray.findIndex(item => item === selectedProducts), 1);

            console.log(newArray)

            return newArray;
        }


        if (this.state.selected === false)
        {
            return (
                <div>
                    <div className={'header'}>
                        <h1>MyStore</h1>
                    </div>
                    <div className={"container"}>
                        <List
                            product={product}
                            selected={this.handleClick}
                            onDemand={this.state.selected}
                        />
                    </div>
                    <div className={'footer'}><h3>Footer</h3></div>
                </div>
                
            );
        }
        else
        {
            return (
                <div>
                    <div className={'header'}>
                        <h1><i className={'fas fa-arrow-left button-back'}onClick={this.handleToList}></i> MyStore</h1>
                    </div>
                    <div className="details-page-container">

                        <Carousel
                            images={selectedProduct.secondImages}
                        />

                        <div className={'details-page-wrapper'}>
                            <div className={'product-detail'}>
                                <div className={'product-detail__name'}>
                                    {selectedProduct.name}
                                </div>

                                <div className={'rating-tag'}>
                                    <StarRatings
                                        rating={selectedProduct.rating}
                                        numberOfStars={selectedProduct.rating}
                                        starRatedColor={'rgb(255,194,25)'}
                                    />
                                </div>

                            </div>
                            <div className={'product-detail__buttons'}>
                                <div className={'product-detail__price'}>
                                    {selectedProduct.price+'$'}
                                </div>
                                <div className={'product-detail__more-info'}>
                                    <a href="" className={'product-detail__more-info-link'}>ADD TO CART</a>
                                </div>
                            </div>
                            
                            <SpecificBoxes product={selectedProduct}/>
                            <h2 className={'suggestion-title'}>Related Products</h2>
                            <SuggestBox
                                product={nonSelected(product, selectedProduct)}
                                onDemand={this.state.selected}
                            />
                        </div>
                    </div>
                    <div className={'footer'}><h3>Footer</h3></div>
                </div>
            )
        }

    }
}

export default App;
