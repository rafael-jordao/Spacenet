import React from "react";
import MainHeader from "../components/MainHeader/MainHeader";
import ColNavigation from "../components/ColNavigation/ColNavigation";
import MainNewsPhoto from "../assets/israel-andrade-YI_9SivVt_s-unsplash 1.png";
import BirthdaysOfMonth from "../components/BirthdaysOfMonth/BirthdaysOfMonth";
import SpaceNetLogo from "../assets/SpacenetMinorLogo.svg"

const IntranetNews = () => {
    return (
        <>
            <MainHeader />
            <div style={{ paddingTop: '1rem' }} className="row homePageGrid">
                <ColNavigation />
                <div className="col">
                    <div>
                        <img style={{ borderRadius: '30px' }} className="mainNewsPhoto img-fluid" src={MainNewsPhoto}></img>
                    </div>
                    <div className="newsTitle" style={{ paddingTop: '4rem' }}>
                        <h1 >Presencial ou home office?</h1>
                    </div>
                    <div style={{ textAlign: 'left', padding: '4rem', lineHeight: '2' }} className="paragraph">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur massa tortor, viverra at mi ut, volutpat ornare nulla. Nam venenatis rutrum nibh, vitae dapibus mi ultrices sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas condimentum mauris sem, nec ullamcorper velit eleifend non.</p>
                        <p style={{ paddingTop: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur massa tortor, viverra at mi ut, volutpat ornare nulla. Nam venenatis rutrum nibh, vitae dapibus mi ultrices sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas condimentum mauris sem, nec ullamcorper velit eleifend non.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur massa tortor, viverra at mi ut, volutpat ornare nulla. Nam venenatis rutrum nibh, vitae dapibus mi ultrices sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas condimentum mauris sem, nec ullamcorper velit eleifend non.</p>
                        <p style={{ paddingTop: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur massa tortor, viverra at mi ut, volutpat ornare nulla. Nam venenatis rutrum nibh, vitae dapibus mi ultrices sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas condimentum mauris sem, nec ullamcorper velit eleifend non.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur massa tortor, viverra at mi ut, volutpat ornare nulla. Nam venenatis rutrum nibh, vitae dapibus mi ultrices sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas condimentum mauris sem, nec ullamcorper velit eleifend non.</p>
                        <p style={{ paddingTop: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur massa tortor, viverra at mi ut, volutpat ornare nulla. Nam venenatis rutrum nibh, vitae dapibus mi ultrices sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas condimentum mauris sem, nec ullamcorper velit eleifend non.</p>
                    </div>

                </div>




                <footer>
                    <img style={{ padding: '5rem' }} src={SpaceNetLogo}></img>
                </footer>
            </div>
        </>
    )
}

export default IntranetNews;







