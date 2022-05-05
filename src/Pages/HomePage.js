import React from "react";
import MainHeader from "../components/MainHeader/MainHeader";
import MainCarousel from "../components/MainCarousel/MainCarousel";
import ColNavigation from "../components/ColNavigation/ColNavigation";
import CompanySector from "../components/CompanySector/CompanySector";
import BirthdaysOfMonth from "../components/BirthdaysOfMonth/BirthdaysOfMonth";
import techPhoto from "/Users/rafaeljordao/Documents/my-codes/Intranet/src/assets/techPhoto.png"
import humanResources from "/Users/rafaeljordao/Documents/my-codes/Intranet/src/assets/humanResources.png"
import countabilitePhoto from "/Users/rafaeljordao/Documents/my-codes/Intranet/src/assets/countabilitePhoto.png"
import SpaceNetLogo from "/Users/rafaeljordao/Documents/my-codes/Intranet/src/assets/SpacenetMinorLogo.svg"




const HomePage = () => {


    return (
        <div>
            <MainHeader />

            <div style={{ paddingTop: '1rem' }} className="homePageGrid">
                <div className="row">
                    <ColNavigation />
                    <MainCarousel />
                    <div className="row">
                        <BirthdaysOfMonth />
                        <div className="col-md d-flex overflow-auto ">
                                <CompanySector
                                    title='Setor de Tecnologia'
                                    paragraph="Some quick example text to build on the card title and make up the bulk of the card's content."
                                    image={techPhoto} />
                                <CompanySector
                                    title='Recursos Humanos'
                                    paragraph="Some quick example text to build on the card title and make up the bulk of the card's content."
                                    image={humanResources} />
                                <CompanySector
                                    title='Contabilidade'
                                    paragraph="Some quick example text to build on the card title and make up the bulk of the card's content."
                                    image={countabilitePhoto} />
                         
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <img style={{padding: '5rem'}} src={SpaceNetLogo }></img>
            </footer>
        </div>
    )
}

export default HomePage;

                            


















