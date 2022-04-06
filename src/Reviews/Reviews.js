import React, { useEffect, useState } from 'react';
import "./Reviews.css"

const Reviews = () => {

  const [CustomReviews, setCustomReviews]=useState([])

    // useEffect(()=>{
    //     fetch('reviews.json')
    //     .then(res=>res.json())
    //     .then(data=>setreviews(data))
    // },[])

    return (
        <div>

          {
            CustomReviews.map(singelreview => <h1>{singelreview.name}</h1> )
          }

















          {/* {
              reviews.map(singelreview =>
              <div className="rating"
              >
            <h1>{singelreview.name}</h1> 
            <h3>Comment: {singelreview.comment}</h3>
             <h2>Rating: {singelreview.rating}</h2>

               </div>


              
              <Reviewinfo
              key={review._id}
              review={review}
              ></Reviewinfo> 
            )
          } */}
        </div>


         
    );
};

export default Reviews;