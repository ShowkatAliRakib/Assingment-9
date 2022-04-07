import React from 'react';
import "./Review.css"

const Review = ({data}) => {
    
    const {name, comment, rating}= data;
    console.log( name);
    
    
    return (
        <div className="card-container ml-5">
            <div className="cart">
            <h1 className="text-xl  text-teal-900"> Name:  {name}</h1>
            <p className="comment"> <small > {comment}</small> </p>
            <p className="text-xl  text-teal-900">Rating :{rating} </p>
             </div>
        </div>
    );
};

export default Review;