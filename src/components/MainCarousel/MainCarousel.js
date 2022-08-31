import React from "react";
import { useNavigate } from 'react-router-dom';
import CaroselImage from "../../assets/newsPage2.svg"
import "../MainCarousel/MainCarousel.css"
import SecondCarouselImage from "../../assets/secondCarouselImage.png"

const MainCarousel = () => {

    const navigate = useNavigate()

    return (


        <div id="carouselExampleControls" className="carousel slide col-lg carouselImage" data-ride="carousel">
            <div className="carousel-inner ">
                <div className="carousel-item active">
                    <img onClick={() => navigate('/noticias')} className="d-block w-100 CarouselImageOne" src={CaroselImage} alt="First slide" />
                </div>
                <div className="carousel-item">

                    <img className="d-block w-100 " src={SecondCarouselImage} alt="Second slide" />
                </div>
            </div>

            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only"></span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only"></span>
            </a>

        </div>
    )
}

export default MainCarousel;