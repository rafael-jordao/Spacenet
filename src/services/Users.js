import axios from "axios";
import { useState, useEffect } from "react";



export default function VerifyUser() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get('https://gorest.co.in/public/v2/users')
            setUsers(data)
            console.log(data)
        })();
    }, [])
    
    return (
        <>
            <ul>
                {users.map((allusers, id) => {
                  return <li key={id}>{allusers}</li>
                })}
            </ul>
        </>
    )
}

// export default function verifyUser(_email) {
//     const verify = axios.get('https://gorest.co.in/public/v2/users')
//         .then(resp => {
//             console.log(resp.data)
//         });

//     console.log(verify)
//     //return verify;
// }





// export default function VerifyUser() {

// const [allUsers, setAllUsers] = useState("");

//   useEffect(() => {
//     const url = 'https://gorest.co.in/public/v2/users';

//     const fetchData = async () => {
//       try {
//         const response = await fetch(url);
//         const json = await response.json();
//         //console.log(json);
//         setAllUsers(json)
//       } catch (error) {
//         console.log("error", error);
//       }
//     };

//     fetchData();
//   }, []);


//     return allUsers
// }





