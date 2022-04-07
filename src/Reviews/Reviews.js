import Review from '../Review/Review';

import "./Reviews.css"
import CustomReviews from './../reviewshooks/customeReviews';

const Reviews = () => {

  const [reviews, setreviews]= CustomReviews([])
  


    return (
        <div>

          <h1 className="text-6xl mt-5 text-teal-900">WHAT OUR CUSTOMER SAY!!!</h1>



         <div className="flex-row">
         {
            reviews.map(rev=> <Review 
            key={rev._id}
            data={rev}
            ></Review> )
          }
         </div>
       

        </div>


         
    );
};

export default Reviews;