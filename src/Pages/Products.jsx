import "../Styles/Products.css";
import { Link } from "react-router-dom";

function Products() {

    return (
        <div className="prodBackground">
            <div className="productsTitle"><h1>Try some coffee from our Sponsors!</h1>
                
            </div>
            <div className="products">

                <img src="/assets/Cafecord-product.png"></img>
                <h2>Up Coffee</h2>
                <p>Made from a small batch roaster, Up coffee will be sure to put a pep to your step!</p>
                <p>$20 USD</p>

                <img src="/assets/Cafecord-product2.png"></img>
                <h2>COFFEE</h2>
                <p>From the makers of Up coffee, its COFFEE coffee, with subtle notes of coffee, COFFEE will satisfy any coffee lover!</p>
                <p>$25 USD</p>

                <img src="/assets/Cafecord-product3.png"></img>
                <h2>Limited Edition: Azul Seca coffee</h2>
                <p>Hidden high in the Azul mountains this coffee is grown, and roasted to perfection! The taste alone will transport you to the peak of coffee euphoria!</p>
                <p>$30 USD</p>

                <img src="/assets/toGoPacks.png"></img>
                <h2>COFFEE To Go</h2>
                <p>The masses asked for it and we delivered! COFFEE to go packets are here! Now you can have the incredibly satisfying COFFEE wherever you are!</p>
                <p>$30 USD Pack of 24</p>

            </div>
            <div className="productChatLink">
               <h2><Link to={'/Chat'} className="backChatLink" >Back to Chat</Link></h2> 
            </div>
            
        </div>
    )
}


export default Products