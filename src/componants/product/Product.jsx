import { Link } from 'react-router-dom';
import image1 from '../image/Again Device.png'
import image2 from '../image/Handpieces series.png'
import image3 from '../image/deka vid.png'
import image4 from '../image/again pdf/again-01.png'
import { motion} from "framer-motion"
import { useState } from 'react';
function Product() {
    
    const [moreDetails , setMoreDetails] = useState(false)
    
    let showMore = ()=>{
        moreDetails?setMoreDetails(false):setMoreDetails(true);
        console.log(moreDetails);
    }

    return(
        <motion.div className={`products bg-content h-content`}
        initial={{x:"100%"}}
        animate={{ x:"0%" }}
        transition={{duration:0.3 , ease:"easeOut"}} 
        exit={{x:"-100vh"}}
        >
            <div className={`container d-flex flex-column justify-content-between ${moreDetails?"":"h-87"}  text-light py-2`}>
                    <div className={`product d-flex flex-grow-1`}>
                        <div className="left d-flex flex-column justify-content-between w-50">
                            <div>
                                <div className="h4">Again Device</div>
                                <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing eli
                                </p>
                            </div>
                            <div className={moreDetails?"d-none":""}>
                                <div className="h5">why choosing</div>
                                <ul>
                                    <li>Lorem ipsum dolor</li>
                                    <li>Lorem ipsum dolor</li>
                                    <li>Lorem ipsum dolor</li>
                                </ul>
                            </div>
                            <div className = {moreDetails?"d-none":""}>
                                <div className="h5">Especially Recommended for</div>
                                <ul>
                                    <li>Lorem ipsum</li>
                                    <li>Lorem ipsum</li>
                                    <li>Lorem ipsum</li>
                                </ul>
                            </div>
                        </div>
                        <div className={`right ${moreDetails?"animate__animated animate__slideInUp":""} w-50 d-flex  justify-content-center align-items-center`}>
                            <img className={`${moreDetails?"w-25":"img-fluid w-50"}`} src={image1} alt="" />
                        </div>
                    </div>
                    <div className={`${moreDetails?"d-none":""} more d-flex justify-content-center text-center mt-2`}>
                        <div className='more-button'>
                            <Link onClick={showMore} className="text-light w-">
                                <p className='p-0 m-0'>MORE</p>
                                <i className="fa-solid fa-angle-down"></i>
                            </Link>
                        </div>
                    </div>
                    <div className = {`${moreDetails?"":"d-none"} animate__animated animate__fadeInUp more-details`} >
                        <div className='details'>
                            <div className="h5">Brochure</div>
                            <Link to={"/pdf"} className=' d-flex gap-4 p-2 bg-black bg-opacity-25 rounded align-items-center prod-details'>
                                <div className="image w-25 ">
                                    <img className='img-fluid' src={image4} alt="" />
                                </div>
                                <p className='m-0'>Again</p>
                            </Link>
                        </div>
                        <div className='details my-3'>
                            <div className="h5">Case Collection</div>
                            <Link to={"/pdf"} className=' d-flex p-2 bg-black bg-opacity-25 rounded align-items-center prod-details'>
                                <div className="image w-50">
                                    <img className='img-fluid' src={image2} alt="" />
                                </div>
                                <p className='m-0'>Again</p>
                            </Link>
                        </div>
                        <div className='details'>
                            <div className="h5">Videos</div>
                            <div className="videos d-flex gap-3 flex-wrap w-100">
                                    <Link to={"/video"} className=' gap-1 d-flex p-2 bg-black bg-opacity-25 rounded align-items-center prod-details'>
                                        <div className="image w-40">
                                            <img className='img-fluid rounded' src={image3} alt="" />
                                        </div>
                                        <p className='m-0 fs-15'>Again Video</p>
                                    </Link>
                                    <Link to={"/video"} className=' gap-1 d-flex p-2 bg-black bg-opacity-25 rounded align-items-center prod-details'>
                                        <div className="image w-40">
                                            <img className='img-fluid rounded' src={image3} alt="" />
                                        </div>
                                        <p className='m-0 fs-15'>Again Video</p>
                                    </Link>
                                    <Link to={"/video"} className=' gap-1 d-flex p-2 bg-black bg-opacity-25 rounded align-items-center prod-details'>
                                        <div className="image w-40">
                                            <img className='img-fluid rounded' src={image3} alt="" />
                                        </div>
                                        <p className='m-0 fs-15'>Again Video</p>
                                    </Link>
                                    <Link to={"/video"} className=' gap-1 d-flex p-2 bg-black bg-opacity-25 rounded align-items-center prod-details'>
                                        <div className="image w-40">
                                            <img className='img-fluid rounded' src={image3} alt="" />
                                        </div>
                                        <p className='m-0 fs-15'>Again Video</p>
                                    </Link>
                                    <Link to={"/video"} className=' gap-1 d-flex p-2 bg-black bg-opacity-25 rounded align-items-center prod-details'>
                                        <div className="image w-40">
                                            <img className='img-fluid rounded' src={image3} alt="" />
                                        </div>
                                        <p className='m-0 fs-15'>Again Video</p>
                                    </Link>
                                    <Link to={"/video"} className=' gap-1 d-flex p-2 bg-black bg-opacity-25 rounded align-items-center prod-details'>
                                        <div className="image w-40">
                                            <img className='img-fluid rounded' src={image3} alt="" />
                                        </div>
                                        <p className='m-0 fs-15'>Again Video</p>
                                    </Link>
                            </div>
                        </div>
                    </div>
            </div>
        </motion.div>
    )
}
export default Product;
