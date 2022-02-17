import React from "react";
import classes from "./HeroSection.module.css";
// import { useQuery, gql } from "@apollo/client"

// const DATAS = gql`
// query{
//   homePage(id: 1){
//     data{
//       attributes{
//         GlobalStylings{
//           theme
//           primeryColor
//           backgroundColor
//         }
//         Header{
//           BrandName
//           Actions{
//             value
//           }
//         }
//         tripRow{
//         	Title
//           Row{
//             tripTitle
//             tripPrice
//             tripRating
//             tripThumbnail{
//               data{
//                 attributes{
//                   url
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }
// `

export default function HeroSection({ children, bg }) {

  let img ="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1933&q=80";
  if (bg == "dark") {
    img = "https://images.unsplash.com/photo-1521336575822-6da63fb45455?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  }

// const {loading, error, data} = useQuery(DATAS)

// if (loading) {
//   console.log("loading");
//   return(
//     <h1>loading...</h1>
//   )
// }
// if (error) {
//   console.log("error occored");
//   return(
//     <h1>
//       error
//     </h1>
//   )
// }
  // const datax = JSON.stringify(data.homePage.data.attributes)
  return (
    <div className={classes.outer} style={{ backgroundImage: `url(${img})` }}>
      {/* {console.log(datax)} */}
      <div className={classes.blackBg} />
      {children}
    </div>
  );
}
