// import { useEffect, useState } from "react";

// export function useTokenExpiration() {
//     const expirationTime = localStorage.getItem("expirationTime");
//     const [isTokenValid, setIsTokenValid] = useState(true);

//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             const currentTime = new Date().getTime();
//             if (currentTime > expirationTime) {
//                 setIsTokenValid(false);
//                 clearInterval(intervalId);
//             }
//         }, 1000);

//         return () => {
//             clearInterval(intervalId);
//         };
//     }, [expirationTime]);

//     return isTokenValid;
// }

export function isTokenValid() {
  const expirationTime = localStorage.getItem("expirationTime");
  const currentTime = new Date().getTime();
  return currentTime <= expirationTime;
}
