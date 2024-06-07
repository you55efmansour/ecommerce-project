import React from "react"
import { motion } from 'framer-motion'
import vid from '../project videos/AGAIN by DEKA - How to GAIN Power in Your Practice_.mp4'
function Video() {
    return(
    <motion.div className="h-content bg-dark"
    initial={{x:"100%"}}
    animate={{ x:"0%" }}
    transition={{duration:0.3 , ease:"easeOut"}} 
    exit={{x:"-100vh"}}
    >
        <div className="container d-flex justify-content-center align-items-center product-details-content">
        <video className="rounded overerflow-hidden" src={vid} width={"88%"} controls autoPlay muted ></video>
        </div>
    </motion.div>
    )
}
export default Video