import { Link } from "react-router-dom";
import styles from '../Styles/EditProfile.module.css';

 function EditProfile() {


    return(
        <div className={styles.profileBackground}>
            <div className={styles.epSideMenu}><Link className={styles.profileLinks} to={'/Chat'}>Chat</Link></div>
            <div className={styles.avatarCard}>
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