import './ProfileComponent.css'
import Profilepicturehome from '../../img/boeing2finger.jpg'

function ProfileComponent(){
    return(
            <div className='profile-component-container'>
                <div className="profile-img">
                    <img src={Profilepicturehome} />
                </div>
                <div className="profile-detial">
                    <p>Boeing Miffy</p>
                    <p>ID 242447</p>
                    <p>BMI</p>
                    <p>Total Run</p>
                    <button className='btn-profilehome-logout'>Log out</button>
                </div>
            </div>  
    )
}

export default ProfileComponent;