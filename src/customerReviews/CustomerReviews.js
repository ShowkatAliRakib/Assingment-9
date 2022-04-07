import React from 'react';

const CustomerReviews = ({data}) => {
    const {name, comment, rating}= data;
    return (
        <div>
              <div className="card-container ml-5">
            <div className="cart">
            <h1 className="text-xl  text-teal-900"> Name:  {name}</h1>
            <p className="comment"> <small > {comment}</small> </p>
            <p className="text-xl  text-teal-900">Rating :{rating} </p>
             </div>
        </div>
        </div>
    );
};

export default CustomerReviews;