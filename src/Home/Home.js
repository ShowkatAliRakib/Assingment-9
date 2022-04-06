
import { useNavigate } from "react-router-dom";
import "./Home.css"

const Home = () => {

    const navigate = useNavigate()
    
    return (
        <section>
            <div className="pc-container">
            
            <div className="pc-info">
                <h1 className="h1">DEll COMPUTER</h1>
                <p>Dell is an American company that develops, sells, repairs, and supports computers and related products and services, and is owned by its parent company of Dell Technologies. Founded in 1984 by Michael Dell, the company is one of the largest technology corporations in the world, employing more than 165,000 people around the world.[4][5]

                </p>
              
                
            </div>

            <div className="pc-img">
                
                <img src="https://img.freepik.com/free-vector/computer-monitor-graphic-animator-creating-video-game-modeling-motion-processing-video-file-using-professional-editor-vector-illustration-graphic-design-art-designer-workplace-concept_74855-13038.jpg?size=626&ext=jpg&uid=R67498664&ga=GA1.1.725406047.1648230930" alt=""/>
              
            </div>
            </div>


            <div>
                <h2 className="text-5xl">Customer Reviews</h2>
            </div>




            <button onClick={()=>navigate("/Reviews")}>
                See All Reviews
            </button>
        </section>
    );
};

export default Home;