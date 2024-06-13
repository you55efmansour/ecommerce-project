import { Link, useParams } from 'react-router-dom';
import data from '../../data/products.json'
import { useState } from 'react';
function Product() {
    let {id} = useParams();
    let {products} = data
    const myProduct = (product)=>{
        let mainProduct = product.find(prod => prod.id === +id)
        if (mainProduct) {
            return(
                <div className={`products bg-${mainProduct.color} h-content animate__animated animate__fadeInRight`}>
            <div className={`container d-flex flex-column ${moreDetails?"vh-100":"h-87 justify-content-between"}  text-light py-2`}>
                    <div className={`product d-flex ${moreDetails?"":"flex-grow-1"}`}>
                        <div className = {`left d-flex flex-column ${moreDetails?"":"justify-content-between"} w-50`}>
                            <div>
                                <div className="h4">{mainProduct.title}</div>
                                <p>
                                {mainProduct.define}
                                </p>
                            </div>
                            <div className={moreDetails?"d-none":""}>
                                <div className="h5">why choosing</div>
                                <ul>
                                {mainProduct.choosing.map((text , i)=>{return <li key={i}>{text}</li>})}
                                </ul>
                            </div>
                            <div className = {moreDetails?"d-none":""}>
                                <div className="h5">Especially Recommended for</div>
                                <ul>
                                {mainProduct.recommended.map((text , i)=>{return <li key={i}>{text}</li>})}
                                </ul>
                            </div>
                        </div>
                        <div className={`right ${moreDetails?"animate__animated animate__slideInUp":""} w-50 d-flex  justify-content-center align-items-center`}>
                            <img className={`${moreDetails?"product-pic":"img-fluid w-50"}`} src={`${process.env.PUBLIC_URL}${mainProduct.img}`} alt="" />
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
                            <Link to={`/pdf/${mainProduct.id}/${mainProduct.color}`} className=' d-flex gap-4 p-2 bg-black bg-opacity-25 rounded align-items-center prod-details'>
                                <div className="image w-25 ">
                                    <img className='img-fluid' src={`${process.env.PUBLIC_URL}${mainProduct.pdfCover}`} alt="" />
                                </div>
                                <p className='m-0'>{mainProduct.pdfTitle}</p>
                            </Link>
                        </div>
                        <div className='details my-3'>
                            <div className="h5">Case Collection</div>
                            <Link to={`/pdf/${mainProduct.id}/${mainProduct.color}`} className=' d-flex gap-4 p-2 bg-black bg-opacity-25 rounded align-items-center prod-details'>
                                <div className="image w-25">
                                    <img className='img-fluid' src={`${process.env.PUBLIC_URL}${mainProduct.pdfCover}`} alt="" />
                                </div>
                                <p className='m-0'>{mainProduct.pdfTitle}</p>
                            </Link>
                        </div>
                        {mainProduct.video?<div className='details'>
                            <div className="h5">Videos</div>
                            <div className="videos d-flex gap-3 flex-wrap w-100">
                                {mainProduct.videoPic.map((pic , i)=>{
                                    return(<Link key={i} to={`/video/${mainProduct.id}/${mainProduct.color}/${i}`} className=' gap-1 d-flex p-2 bg-black bg-opacity-25 rounded align-items-center prod-details'>
                                        <div className="image w-40">
                                            <img className='img-fluid' src={`${process.env.PUBLIC_URL}${pic}`} alt="" />
                                        </div>
                                        <p className='m-0 fs-15'>{mainProduct.videoTitle[i]}</p>
                                    </Link>)
                                })}
                            </div>
                        </div>:null}
                    </div>
            </div>
                </div>
            )
        }
    }

    const [moreDetails , setMoreDetails] = useState(false)
    
    let showMore = ()=>{
        moreDetails?setMoreDetails(false):setMoreDetails(true);
    }

    return(
        myProduct(products)
    )
}
export default Product;
