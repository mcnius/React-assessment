import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


export default class Carousel extends Component {

    render() {
        return (
            <div>

                <OwlCarousel
                    className="owl-theme"
                    loop
                    margin={5}
                    items={1}
                    nav={false}
                >
                    {
                        this.props.images.map((slide, index) => (

                            <div
                                key={index}
                                className="item"
                            >
                                <img
                                    src={slide.url}
                                    alt={"Hello"}
                                />
                            </div>

                        ))
                    }

                </OwlCarousel>
            </div>
        );
    }
}
