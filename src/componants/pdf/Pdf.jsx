import { motion } from 'framer-motion'
import image1 from '../image/again pdf/again-01.png'
import image2 from '../image/again pdf/again-02.png'
import image3 from '../image/again pdf/again-03.png'
import image4 from '../image/again pdf/again-04.png'
import image5 from '../image/again pdf/again-05.png'
import image6 from '../image/again pdf/again-06.png'
import image7 from '../image/again pdf/again-07.png'
import image8 from '../image/again pdf/again-08.png'
import image9 from '../image/again pdf/again-09.png'
import image10 from '../image/again pdf/again-10.png'
import image11 from '../image/again pdf/again-11.png'
import image12 from '../image/again pdf/again-12.png'

function Pdf() {
    return (
      <motion.div className='h-content bg-content'
      initial={{x:"100%"}}
        animate={{ x:"0%" }}
        transition={{duration:0.3 , ease:"easeOut"}} 
        exit={{x:"-100vh"}}
      >
        <div className="container">
          <div id="carouselExampleControlsNoTouching" className="carousel slide h-87 d-flex justify-content-center align-items-center" data-bs-touch="true">
            <div className="carousel-inner pic-container">
              <div className="carousel-item active">
                <img src={image1} className="img-fluid" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={image2} className="img-fluid" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={image3} className="img-fluid" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={image4} className="img-fluid" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={image5} className="img-fluid" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={image6} className="img-fluid" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={image7} className="img-fluid" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={image8} className="img-fluid" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={image9} className="img-fluid" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={image10} className="img-fluid" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={image11} className="img-fluid" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={image12} className="img-fluid" alt="..."/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
              <span className="carousel-control-prev-icon bg-dark rounded" aria-hidden="true"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
              <span className="carousel-control-next-icon bg-dark rounded" aria-hidden="true"></span>
            </button>
          </div>   
        </div>
      </motion.div>
    );
}

export default Pdf;
