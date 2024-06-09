import React from "react"
import vid from '../project videos/AGAIN by DEKA - How to GAIN Power in Your Practice_.mp4'

function Video() {
    return(
    <div className="h-content bg-black animate__animated animate__fadeInRight">
        <div className=" d-flex justify-content-center align-items-center product-details-content">
        <video className="rounded overerflow-hidden" src={vid} width={"100%"} height={"100%"}  autoPlay muted ></video>
        </div>
    </div>
    )
}
export default Video