import React, { Component } from 'react';
import StarRatings from '../../node_modules/react-star-ratings';

// CSS
import '../css/App.css'

class ListReviews extends Component {
    render() {

        let fila = this.props.reviews.map((item, index) => {
            return(
                <tr key={index}>
                    <td>
                        {item.reviewValue}
                    </td>
                    <td className={'stars-review-table'}>
                        <StarRatings
                            rating={Number(item.reviewRating)}
                            numberOfStars={Number(item.reviewRating)}
                            starRatedColor={'rgb(255,194,25)'}
                        />
                        
                    </td>
                    <td>
                        {item.reviewAuthor}
                    </td>
                    <td>
                        {item.reviewDate}
                    </td>
                </tr>
            )
        });

        return (
            <div>
                <table className={'review-table'}>
                    <thead>
                        <tr>
                            <th>Review</th>
                            <th>Rating</th>
                            <th>Author</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody >
                        {fila}
                    </tbody>
                </table>


            </div>
        );
    }
}

export default ListReviews;