// import React, { useEffect, useState } from "react";
// import service from "./service";
// import UserPosts from "./UserPosts";

// export default function DataTable() {

//     const [users, setUsers] = useState([]);
//     const [searchValue, setSearchValue] = useState('')
//     const [id, setId] = useState({ hits: [] });


//     const getUsers = async () => {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json();
//         setUsers(data);
//     }

//     const getFilteredByName = () => {
//         if (!searchValue) {
//             return users;
//         }
//         const result = users.filter(user => user.name.toLowerCase()
//             .startsWith(searchValue.toLowerCase()))
//         return result;
//     }

//     // const getFilteredByEmail = () => {
//     //     if (!searchValue) {
//     //         return users;
//     //     }
//     //     const result = users.filter(user => user.name.toLowerCase()
//     //         .startsWith(searchValue.toLowerCase()))
//     //     return result;
//     // }

//     const getRowValues = user => {
//         return [user.name, user.email, user.company.name];
//     }

//     const getIdUser=()=>{

//     }

//     useEffect(() => {
//         getUsers();
//     }, []);


//     return (
//         <div>
//             <input
//                 value={searchValue}
//                 type="text"
//                 placeholder="filter"
//                 onChange={e => setSearchValue(e.target.value)}
//             />
//             <table>
//                 <thead>
//                     <tr>
//                         <th>name </th>
//                         <th>email </th>
//                         <th>company name </th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {getFilteredByName().map((user, idx) => (
//                         <tr key={idx}>
//                             {getRowValues(user).map((cell, idx2) => <td key={idx2} onClick={getIdUser()}>
//                                 {cell}
//                             </td>)}
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     )
// }