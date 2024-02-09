import "../Styles/Products.css";
import { Link } from "react-router-dom";
import CafePorduct from '../assets/Cafecord-product.png';
import CafePorduct2 from '../assets/Cafecord-product2.png';
import CafePorduct3 from '../assets/Cafecord-product3.png';
import ToGo from '../assets/toGoPacks.png';

function Products() {

    return (
        <div className="prodBackground">
            <div className="productsTitle">
                <h1>Try some coffee from our Sponsors!</h1>
            </div>
            <div className="products">

                <img src={CafePorduct}></img>
                <h2>Up Coffee</h2>
                <p>Made from a small batch roaster, Up coffee will be sure to put a pep to your step!</p>
                <p>$25 USD</p>

                <img src={CafePorduct2}></img>
                <h2>COFFEE</h2>
                <p>From the makers of Up coffee, its COFFEE coffee, with subtle notes of coffee, COFFEE will satisfy any coffee lover!</p>
                <p>$25 USD</p>

                <img src={CafePorduct3}></img>
                <h2>Limited Edition: Azul Seca coffee</h2>
                <p>Hidden high in the Azul mountains this coffee is grown, and roasted to perfection! The taste alone will transport you to the peak of coffee eurphoria!</p>
                <p>$30 USD</p>

                <img src={ToGo}></img>
                <h2>COFFEE To Go</h2>
                <p>The masses asked for it and we delivered! COFFEE to go packets are here! Now you can have the incredibly satisfying COFFEE wherever you are!</p>
                <p>$40 USD pack of 24</p>

            </div>
            <div className="productsLinkDecor">
                <h2><Link to={'/Chat'} className="productsLink">Back to Chat</Link></h2>
            </div>



        </div>
    )
}


export default Products