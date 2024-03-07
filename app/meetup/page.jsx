// "use client"

// import { useEffect, useRef, useState } from 'react'

// export default function page (){
//   const [users, setUsers] = useState([]);
//   const [hasMore, setHasMore] = useState(true);
//   const [page, setPage] = useState(0);
//   const observerTarget = useRef(null);

//   const loadUser = async (page) => {               // ← ①
//     const URL = `https://gorest.co.in/public/v2/users?&page=${page}`;

//     const response = await fetch(URL);
//     const usersData = await response.json();
//     const count = usersData.length;

//     console.log(`GET ${URL}  count=${count}`,users);
//     setUsers([...users, ...usersData]);
//     setHasMore(count > 0);
//   }


//   useEffect(() => {
//     const observer = new IntersectionObserver(    
//       entries => {                                
//         if (entries[0].isIntersecting) {         
//           if (hasMore) {
//             setPage(p => p + 1);                  // ← ⑤
//            }
//         }
//       },
//       { threshold: 1.0 }                          // ← ⑥
//     );

//     if (observerTarget.current) {                 // ← ⑦
//       observer.observe(observerTarget.current);
//     }
//     return () => {                                // ← ⑧
//       if (observerTarget.current) { 
//         observer.unobserve(observerTarget.current);
//       }
//     };
//   }, [hasMore, observerTarget]);


//   useEffect(() => {        
//     if (page > 0) {
//       loadUser(page);
//     }
//   }, [page]);

//   return (
//     <div className="container mt-4 p-4"
//          style={ {height:400, width: "50%",overflow: "auto"} }>
//       <ul className="list">                     
//       {users.map((user, ix) =>
//         <li className="list-item p-2"
//             style={ {borderBottom: "solid 1px #ccc" , height:"20vh"} } key={ix}>
//           {user.name}
//         </li>
//       )}
//       </ul>
//       <div ref={observerTarget}>                 
//         {hasMore &&                             
//          <progress key={0} className="progress is-success is-radiusless" />}
//       </div>
//     </div>

    
//   );}