import React, { useEffect, useState } from 'react';
import "./Reviews.css"
const Reviews = () => {

    const [reviews, setreviews] = useState([])

    useEffect(()=>{
        fetch('reviews.json')
        .then(res=>res.json())
        .then(data=>setreviews(data))
    },[])

    return (
        <div>
          {
              reviews.map(review =>
              <div className="rating"
              >
            <h1>{review.name}</h1> 
            <h3>Comment: {review.comment}</h3>
             <h2>Rating: {review.rating}</h2>

               </div>


              
            //   <Reviewinfo
            //   key={review._id}
            //   review={review}
            //   ></Reviewinfo> 
            )
          }
        </div>


         
    );
};

export default Reviews;