import { Link } from "react-router-dom";
import '../Styles/EditProfile.css';

 function EditProfile() {


    return(
        <div className="profileBackground">
            <div className="epSideMenu"><Link className="profileLinks" to={'/Chat'}>Chat</Link></div>
            <div className="avatarCard">
                <p>Select New Avatar</p>
                <img src="/Avatars/coffeeBrewers.jpg" alt="Coffee Brewer" />
                <img src="/Avatars/coffeeBrewers2.jpg" alt="Coffee Brewer" />
                <img src="/Avatars/coffeeMaker1.jpg" alt="Coffee Brewer" />
                <img src="/Avatars/coffeeMaker2.jpg" alt="Coffee Brewer" />
                <img src="/Avatars/coffeeMaker3.jpg" alt="Coffee Brewer" />
            </div>
            
 
        </div>
    )
}

export default EditProfile;