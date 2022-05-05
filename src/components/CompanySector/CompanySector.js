import React from "react";
import "/Users/rafaeljordao/Documents/my-codes/Intranet/src/components/CompanySector/CompanySector.css"

const CompanySector = ({image, title, paragraph}) => {

    return (
        <div className="parentCardContainer">
            <div className="cardContainer">
                <img className="img-fluid sectorImage" src={image} alt="Card cap" />
                <div className="container textContainer">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{paragraph}</p>
                    <button href="/homepage" className="mainButton">Saiba mais</button>
                </div>
            </div>
        </div>
    )
}

export default CompanySector;

