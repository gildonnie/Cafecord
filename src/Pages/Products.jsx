import "../Styles/Products.css";
import { Link } from "react-router-dom";

function Products() {

    return (
        <div className="prodBackground">
            <div><h1>Products Page</h1>
                <h2><Link to={'/Chat'}>Chat Page</Link></h2>
            </div>
            <div className="products">
                <img src="/assets/Cafecord-product.png"></img>
                <img src="/assets/Cafecord-product2.png"></img>
                <img src="/assets/Cafecord-product3.png"></img>
                <img src="/assets/Cafecord-product4.png"></img>
            </div>


        </div>
    )
}


export default Products