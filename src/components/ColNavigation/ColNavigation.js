import React from "react";
import "../ColNavigation/ColNavigation.css"

const ColNavigation = () => {
    return (
        <div className="colNavigation">
            <p>Navegação</p>

            <ul className="homeNavigation">
                <div className="iconMargins">
                    <a href="/homepage">
                        <li className="iconContainer"></li>
                    </a>
                    <p>Home</p>
                </div>
                <div className="iconMargins">
                    <a href="/">
                        <li className="iconContainer"></li>
                    </a>
                    <p>Serviços</p>
                </div>
                <div className="iconMargins">
                    <a href="/">
                        <li className="iconContainer"></li>
                    </a>
                    <p>Ajuda</p>

                </div>
                <div className="iconMargins">
                    <a onClick={() => localStorage.clear()} href="/">
                        <li className="iconContainer"></li>
                    </a>
                    <p>Sair</p>
                </div>

            </ul>

        </div>
    )
}

export default ColNavigation;