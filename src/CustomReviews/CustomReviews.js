import { useState, useEffect } from "react"




const CustomReviews = () => {
    const [CustomReviews, setCustomReviews]=useState([])

    useEffect(()=>{
        fetch('reviews.json')
        .then(res=>res.json())
        .then(data => setCustomReviews(data))
    },[])
    return [CustomReviews, setCustomReviews]
}

export default CustomReviews;