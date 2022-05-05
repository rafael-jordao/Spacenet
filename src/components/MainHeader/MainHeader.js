import React from "react";
import { useNavigate } from 'react-router-dom';
import SpacenetMinorLogo from "/Users/rafaeljordao/Documents/my-codes/Intranet/src/assets/SpacenetMinorLogo.svg"
import '/Users/rafaeljordao/Documents/my-codes/Intranet/src/components/MainHeader/MainHeader.css'

const MainHeader = () => {

    const navigate = useNavigate()

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light">
                <a onClick={() => { navigate('/homepage') }} ><img className="navbar-brand brand" src={SpacenetMinorLogo}></img></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navBar">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link sr-only" href="/homepage">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Serviços</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Ajuda</a>
                            </li>
                            <li className="nav-item">
                                <a onClick={() => localStorage.removeItem('userData')} href="/" className="nav-link">Sair</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default MainHeader;