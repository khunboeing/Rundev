import './ProfileComponent.css'
import Profilepicturehome from '../../img/boeing2finger.jpg'
import { Link } from 'react-router-dom'
import {useContext} from 'react'
import {DataContext} from '../../App'

function ProfileComponent(props){

    const{personalData} = props
    const {user, bio, rundiary} = personalData

    const context = useContext(DataContext)
    const bmi = context.calculateBMI(bio.weight, bio.height)
    
    return(
            <div className='profile-component-container'>
                <div className="profile-img">
                    <img src={Profilepicturehome} />
                </div>
                <div className="profile-detial">
                    <p>{bio.name}</p>
                    <p>ID {user.id}</p>
                    <p>BMI {bmi}</p>
                    <p>Total Run {rundiary.reduce((acc, current)=>{
                        return acc+current.distance
                    },0)}</p>
                    <Link to='/login'><button className='btn-profilehome-logout'>Log out</button></Link>
                </div>
            </div>  
    )
}

export default ProfileComponent;