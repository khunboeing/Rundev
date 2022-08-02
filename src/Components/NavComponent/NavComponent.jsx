
import '../NavComponent/NavComponent.css'
import Logo from '../../img/icon-runworker.png'

function NavComponent (){
    return(
        <div className='nav-container'>
            <div className='nav-logo'>
                <img src={Logo} alt="RUN-DEV" /><h1>RUN-DEV{'/>'}</h1>
            </div>
            <div className='nav-btn'>
                <a href="#">Home</a>
                <a href="#">Profile</a>
                <a href="#">About us</a>
            </div>
        </div>
    )
}

export default NavComponent;