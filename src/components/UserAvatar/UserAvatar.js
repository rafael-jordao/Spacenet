import React from "react";
import "../../components/UserAvatar/UserAvatar.css"

const UserAvatar = ({userName, userWork, userPhoto}) => {
    return (
        <li className="d-flex pt-3 containerAvatar">
            <div className="userAvatar"></div>
            <div className="textAlign">
                <p className="userName">{userName}</p>
                <p className="userWork">{userWork}</p>
            </div>
        </li>
    )
}

export default UserAvatar;