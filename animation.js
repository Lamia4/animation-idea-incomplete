import React from 'react'
import '../components/ImageCarousel.css';
// import img1 from '../images/img1.jpg';
// import img2 from '../images/img2.jpg';
// import img3 from '../images/img3.jpeg';
// import img4 from '../images/img4.png';
// import img5 from '../images/img5.jpg';
// import img6 from '../images/img6.webp';
function ImageCarousel() {
    return (
        <div>
            <div className="container">
                <div className="images">
                    {/* <img className="imgC" src={img1}  alt="bild"/>
                    <img className="imgC" src={img2}  alt="bild"/>
                    <img className="imgC" src={img3} alt="bild"/>
                    <img className="imgC" src={img4}  alt="bild"/>
                    <img className="imgC" src={img5}  alt="bild"/> */}
                    {/* <img className="imgC" src={img6} alt="bild"/> */}
                    <iframe src="https://www.youtube.com/embed/NHMCcXjD7Ak?autoplay=1&loop=1&mute=1&controls=0" title="YouTube video player" className="imgC"></iframe>
                    <iframe src="https://www.youtube.com/embed/2KUGaEgfCQc?autoplay=1&loop=1&mute=1&controls=0" title="YouTube video player" className="imgC"></iframe>
                    <iframe src="https://www.youtube.com/embed/kMYWj-mynlY?autoplay=1&loop=1&mute=1&controls=0" title="YouTube video player" className="imgC"></iframe>
                    <iframe src="https://www.youtube.com/embed/RyTqAemkPWo?autoplay=1&loop=1&mute=1&controls=0" title="YouTube video player" className="imgC"></iframe>
                    <iframe src="https://www.youtube.com/embed/iN2fYQ5F-Rc?autoplay=1&loop=1&mute=1&controls=0" title="YouTube video player" className="imgC"></iframe>
                    <iframe src="https://www.youtube.com/embed/AJKVVUfHSyQ?autoplay=1&loop=1&mute=1&controls=0" title="YouTube video player" className="imgC"></iframe>
                </div>
            </div>
        </div>
    )
}
export default ImageCarousel