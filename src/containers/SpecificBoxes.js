import React, { Component } from 'react';

import SpecsBox from "../components/SpecsBox";
import CapacityBox from "../components/CapacityBox";
import ReviewBox from "./ReviewBox";

// CSS
import '../css/App.css'

class SpecificBoxes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            specs: true,
            capacity: false,
            review: false
        };
        this.handleSpecsBox = this.handleSpecsBox.bind(this);
        this.handleReviewBox = this.handleReviewBox.bind(this);
        this.handleCapacityBox = this.handleCapacityBox.bind(this);
    } // Fin del constructor

    handleSpecsBox(){

        this.setState({
            specs: true,
            review: false,
            capacity: false
        });
    }

    handleCapacityBox(){
        this.setState({
            specs: false,
            review: false,
            capacity: true
        });
    }

    handleReviewBox(){

        this.setState({
            specs: false,
            review: true,
            capacity: false
        });
    }

    render() {

        return (
            <div className="details-page-wrapper">
                <div
                    className={'buttons'}
                >
                    <button
                        className={'button-specifications'}
                        onClick={this.handleSpecsBox}
                    >
                        Specifications
                    </button>
                    <button
                        className={'button-capacity'}
                        onClick={this.handleCapacityBox}
                    >
                        Capacity
                    </button>
                    <button
                        className={'button-review'}
                        onClick={this.handleReviewBox}
                    >
                        Review
                    </button>
                </div>


                <div>
                    {this.state.review === true ? <ReviewBox product={this.props.product}/> : (this.state.specs === true ? <SpecsBox product={this.props.product}/> : <CapacityBox product={this.props.product}/>)}
                </div>
            </div>
        );
    }
}

export default SpecificBoxes;
