import './ProfileComponent.css'
import Profilepicturehome from '../../img/boeing2finger.jpg'
import { Link } from 'react-router-dom'
import {useContext} from 'react'
import {DataContext} from '../../App'
import Picprofiledefault from '../../img/userdefaultpic.webp'

function ProfileComponent(props){

    const{personalData} = props
    const {user, bio, rundiary} = personalData

    const context = useContext(DataContext)
    const bmi = context.calculateBMI(bio.weight, bio.height)
    
    return(
            <div className='profile-component-container'>
                <div className="profile-img">
                    <img src={bio.picture || Picprofiledefault} />
                </div>
                <div className="profile-detial">
                    <p>{bio.name}</p>
                    <p>BMI {bmi}</p>
                    <p>Total Run {rundiary.reduce((acc, current)=>{
                        return acc+current.distance
                    },0)}</p>
                    <Link to='/login'><button onClick={()=> localStorage.removeItem('auth')} className='btn-profilehome-logout'>Log out</button></Link>
                </div>
            </div>  
    )
}

export default ProfileComponent;