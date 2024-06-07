import { Link } from 'react-router-dom';
import image1 from '../image/Again Device.png';
import { motion } from "framer-motion"
function Home() {
    return(
        <div className='overflow-hidden'> 
            <div className="row">
                <div className="fw-bold m-0 p-2 bg-black text-light w-100 text-center">
                    PRO SYSTEMS
                </div>
            </div>
            <motion.div
                initial={{x:"100%"}}
                animate={{ x:"0%" }}
                transition={{duration:0.3 , ease:"easeOut"}} 
                exit={{x:"-100vh"}}
                className="container h-content mw-100"
            >
                <div className="row">
                    <Link to={"Product"} className="col-lg-3 col-md-6 col-12 p-0">
                        <div className="card rounded-0 container bg-content border-0 justify-content-center align-items-center">
                            <img src={image1} className="card-img w-25 img-fluid" alt="..."/>
                            <div className="overlay d-flex flex-column justify-content-center align-items-center">
                                <h5 className="card-title">Again device</h5>
                                <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing eli</p>
                            </div>
                        </div>
                    </Link>
                    <Link to={"Product"} className="col-lg-3 col-md-6 col-12 p-0">
                        <div className="card rounded-0 container bg-content border-0 justify-content-center align-items-center">
                            <img src={image1} className="card-img w-25 img-fluid" alt="..."/>
                            <div className="overlay d-flex flex-column justify-content-center align-items-center">
                                <h5 className="card-title">Again device</h5>
                                <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing eli</p>
                            </div>
                        </div>
                    </Link>
                    <Link to={"Product"} className="col-lg-3 col-md-6 col-12 p-0">
                        <div className="card rounded-0 container bg-content border-0 justify-content-center align-items-center">
                            <img src={image1} className="card-img w-25 img-fluid" alt="..."/>
                            <div className="overlay d-flex flex-column justify-content-center align-items-center">
                                <h5 className="card-title">Again device</h5>
                                <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing eli</p>
                            </div>
                        </div>
                    </Link>
                    <Link to={"Product"} className="col-lg-3 col-md-6 col-12 p-0">
                        <div className="card rounded-0 container bg-content border-0 justify-content-center align-items-center">
                            <img src={image1} className="card-img w-25 img-fluid" alt="..."/>
                            <div className="overlay d-flex flex-column justify-content-center align-items-center">
                                <h5 className="card-title">Again device</h5>
                                <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing eli</p>
                            </div>
                        </div>
                    </Link>
                    <Link to={"Product"} className="col-lg-3 col-md-6 col-12 p-0">
                        <div className="card rounded-0 container bg-content border-0 justify-content-center align-items-center">
                            <img src={image1} className="card-img w-25 img-fluid" alt="..."/>
                            <div className="overlay d-flex flex-column justify-content-center align-items-center">
                                <h5 className="card-title">Again device</h5>
                                <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing eli</p>
                            </div>
                        </div>
                    </Link>
                    <Link to={"Product"} className="col-lg-3 col-md-6 col-12 p-0">
                        <div className="card rounded-0 container bg-content border-0 justify-content-center align-items-center">
                            <img src={image1} className="card-img w-25 img-fluid" alt="..."/>
                            <div className="overlay d-flex flex-column justify-content-center align-items-center">
                                <h5 className="card-title">Again device</h5>
                                <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing eli</p>
                            </div>
                        </div>
                    </Link>
                    <Link to={"Product"} className="col-lg-3 col-md-6 col-12 p-0">
                        <div className="card rounded-0 container bg-content border-0 justify-content-center align-items-center">
                            <img src={image1} className="card-img w-25 img-fluid" alt="..."/>
                            <div className="overlay d-flex flex-column justify-content-center align-items-center">
                                <h5 className="card-title">Again device</h5>
                                <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing eli</p>
                            </div>
                        </div>
                    </Link>
                    <Link to={"Product"} className="col-lg-3 col-md-6 col-12 p-0">
                        <div className="card rounded-0 container bg-content border-0 justify-content-center align-items-center">
                            <img src={image1} className="card-img w-25 img-fluid" alt="..."/>
                            <div className="overlay d-flex flex-column justify-content-center align-items-center">
                                <h5 className="card-title">Again device</h5>
                                <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing eli</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </motion.div>
        </div>
    )
}

export default Home ;