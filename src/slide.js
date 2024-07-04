import React,{useState} from "react";
import img1 from './img/pro1.jpg';
import img2 from './img/pro2.jpg';
import img3 from './img/pro3.jpg';
import img4 from './img/pro4.jpg';

const Slideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [intervalId,setIntervalId] = useState(0);
    const images = [
        img1,img2,img3,img4
    ];

    const nextImage = ()=>{
        setCurrentIndex((currentIndex + 1) % images.length);
    };
    const previousImage = ()=>{
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    const startSlideshow = ()=>{
        const id = setInterval(nextImage,5000);
        setIntervalId(id)
    };

    const stopSlideshow = () => {
        clearInterval(intervalId);
    };

    return(
        <div className="slideshow">
            <img src={images[currentIndex]} alt="Slideshow" />
            <button onClick={previousImage}>&lt;</button>
            <button onClick={nextImage}>&gt;</button>
            <button onClick={startSlideshow}>Start</button>
            <button onClick={stopSlideshow}>Stop</button>
        </div>
    )
}
 export default Slideshow;