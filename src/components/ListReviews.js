import React, { Component } from 'react';

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
                    <td>
                        {item.reviewRating}
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