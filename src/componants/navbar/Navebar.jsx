import { Link } from 'react-router-dom';
import logo from '../image/logo.png'
function Navbar(prop) {
    const{showIcon} = prop
    const{direction} = prop

    return(
            <div className="h-nav container w-100 row align-items-center">
                {showIcon &&
                <div className='col-1 d-flex justify-content-center'>
                    <Link className='back-button d-flex align-items-center' to={direction}>
                        <i className="fa-solid text-primary fs-3 fa-angle-left"></i>
                    </Link>
                </div>
                }
                <div className="container col-11 d-flex align-items-center justify-content-center">
                    <Link to={"/"} className="navbar-brand" >
                        <img className='logo' src={logo} alt="" />
                    </Link>
                </div>
            </div>

    )
}
export default Navbar;