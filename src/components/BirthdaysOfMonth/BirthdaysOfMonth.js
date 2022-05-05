import React from "react";
import UserAvatar from "../UserAvatar/UserAvatar";
import "/Users/rafaeljordao/Documents/my-codes/Intranet/src/components/BirthdaysOfMonth/BirthdaysOfMonth.css"

const BirthdaysOfMonth = () => {
    return (
        
            <div className="birthContainer container paddingTopMobile">
                <div className="titleContainer">
                    <p className="title">Aniversariantes</p>
                </div>
                <div className="">
                    <ul className="userAvatarUl ">
                        <UserAvatar
                            userName='Rafael Jordão'
                            userWork='Art Director' />
                        <UserAvatar
                            userName='Gustavo Augusto'
                            userWork='Front-end Developer' />
                        <UserAvatar
                            userName='Sarah'
                            userWork='Scrum Master' />
                        <UserAvatar
                            userName='Michael Ferreira'
                            userWork='Back-end Developer' />
                    </ul>
                </div>
            </div>
      

    )
}

export default BirthdaysOfMonth;