import { Link } from 'react-router-dom';
import logo from '../image/logo.png'
function Navbar(prop) {
    const{showIcon} = prop
    const{direction} = prop
    const{color} = prop

    return(
            <div className={`h-nav w-100 ${color?"bg-info":""}`}>
                <div className="container align-items-center row">
                    {showIcon &&
                    <div className='col-1 d-flex justify-content-center'>
                        <Link className='back-button d-flex align-items-center' to={direction}>
                            <i className={`fa-solid ${color?"text-light":"text-primary"}  fs-3 fa-angle-left`}></i>
                        </Link>
                    </div>
                    }
                    <div className="container col-11 d-flex align-items-center justify-content-center">
                        <Link to={"/"} className="navbar-brand" >
                            <img className='logo' src={logo} alt="" />
                        </Link>
                    </div>

                </div>
            </div>

    )
}
export default Navbar;