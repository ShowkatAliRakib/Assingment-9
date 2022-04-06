import React, { useEffect, useState } from 'react';
import "./Home.css"

const Home = () => {
    const [img, setimg] = useState([])
    // const img = "https://www.freepik.com/free-photo/close-up-image-programer-working-his-desk-office_5698344.htm#query=computer&from_query=dell%20computer&position=14&from_view=search"
    // console.log(img );
    
   useEffect(()=>{
        fetch('img.json')
        .then(res=>res.json())
        
        .then(data=>setimg(data))
    },[])
    return (
        <section>
            <div className="pc-container">
            
            <div className="pc-info">
                <h1>DELL COMPUTER</h1>
                <p>Dell is an American company that develops, sells, repairs, and supports computers and related products and services, and is owned by its parent company of Dell Technologies. Founded in 1984 by Michael Dell, the company is one of the largest technology corporations in the world, employing more than 165,000 people around the world.[4][5]

                </p>
              
                
            </div>

            <div className="pc-img">
                
                <img src="data:image/jpeg;base64,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" alt="" />
              
            </div>
            </div>


            <div>
                <h1>Customer Reviews</h1>
            </div>




            <button>
                See All Reviews
            </button>
        </section>
    );
};

export default Home;