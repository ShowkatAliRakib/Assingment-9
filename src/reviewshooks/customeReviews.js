import { useEffect, useState } from "react"


const CustomReviews = () => {
    const [reviews, setreviews]=useState([])

    useEffect(()=>{
        fetch('reviews.json')
        .then(res=>res.json())
        .then(data=>setreviews(data));
    },[])
    return [reviews, setreviews]

}
export default CustomReviews;