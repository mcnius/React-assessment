import React, { Component } from 'react';
import '../css/SlideShow.css';
import '../css/App.css';

var hasOwn = {}.hasOwnProperty;

function classNames () {
    var classes = '';

    for (var i = 0; i < arguments.length; i++)
    {
        var arg = arguments[i];
        if (!arg) continue;

        var argType = typeof arg;

        if (argType === 'string' || argType === 'number')
        {
            classes += ' ' + arg;
        }
        else if (Array.isArray(arg))
        {
            classes += ' ' + classNames.apply(null, arg);
        }
        else if (argType === 'object')
        {
            for (var key in arg)
            {
                if (hasOwn.call(arg, key) && arg[key])
                {
                    classes += ' ' + key;
                }
            }
        }
    }
    return classes.substr(1);
}

export default class SlideShow extends Component {
    constructor() {
        super();
        this.state = {
            activeIndex: 0
        };
    }

    jumpToSlide(index) {
        this.setState({
            activeIndex: index
        });
    }

    render() {


        return (
            <div className="slideshow">

                <ul className="slideshow-slides">
                    {
                        this.props.images.map((slide, index) => (

                        <li
                            key={index}
                            className={ classNames({ active: index === this.state.activeIndex }) }
                            onClick={this.props.onDemand === false ? this.props.selected.bind(this, this.props.id) : null}
                        >
                            <figure>
                                <img
                                    src={slide.url}
                                    alt={"Hello"}
                                />
                            </figure>
                        </li>

                        ))
                    }

                </ul>

                <ul className="slideshow-dots">
                    {
                        this.props.images.map((slide, index) => (
                            <li
                                className={ (index === this.state.activeIndex) ? 'active': '' }
                                key={index}
                            >
                                <a
                                    onClick={ (event)=> this.jumpToSlide(index) }
                                >
                                    { index + 1 }
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}




