
import { useNavigate } from "react-router-dom";
import CustomReviews from "../reviewshooks/customeReviews";
import CustomerReviews from '../customerReviews/CustomerReviews'
import "./Home.css"

const Home = () => {

    const [reviews, setreviews] = CustomReviews([])

    const navigate = useNavigate()
    
    return (
        <section>
            <div className="pc-container">
            
            <div className="pc-info">
                <h1 className="h1">DELL COMPUTER</h1>
                <p>Dell is an American company that develops, sells, repairs, and supports computers and related products and services, and is owned by its parent company of Dell Technologies. Founded in 1984 by Michael Dell, the company is one of the largest technology corporations in the world, employing more than 165,000 people around the world.[4][5]

                </p>

               <button>READ MORE</button>
              
                
            </div>

            <div className="pc-img">
                
                <img src="https://img.freepik.com/free-vector/computer-monitor-graphic-animator-creating-video-game-modeling-motion-processing-video-file-using-professional-editor-vector-illustration-graphic-design-art-designer-workplace-concept_74855-13038.jpg?size=626&ext=jpg&uid=R67498664&ga=GA1.1.725406047.1648230930" alt=""/>
              
            </div>
            </div>


            <div>
                <h2 className="text-5xl text-teal-900 mb-5">Customer Reviews(03)</h2>
                {
                    reviews.slice(0,3).map(rev=> <CustomerReviews 
                        key={rev._id} 
                        data={rev}/> )
                }
            </div>

           




            <button onClick={()=>navigate("/Reviews")}>
                See All Reviews
            </button>
        </section>
    );
};

export default Home;