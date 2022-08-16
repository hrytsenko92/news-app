// import { useEffect, useState } from "react";

// const SourceItem = (props) => {
//     const {page} = props; /// --- category-sciense-sport
//     const {changeUserCategory} = props; /// --- func-change-to-sport
//     const {articleData} = props; /// --- all-article-data
//     const [receivedData, setReceivedData] = useState("Loading...");
//     console.log(articleData)
//     useEffect(()=>{
//         const pushReceivedData = () => {setReceivedData(articleData)}
//         changeUserCategory(page)
//         pushReceivedData();
//     },[articleData])
//     console.log(receivedData);    
//     return (
//       <div className='sourceItem'>
//         {/* <span>{as}</span> */}
//         <span>{"span:   " + page}</span>
//       </div>
//     );
//   }
  
//   export default SourceItem;



// import { BrowserRouter as Router, Route, Routes, Navigate, Link } from "react-router-dom";
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import style from "./main.module.css";
// import SourceItem from './SourceItem';

// const Main = () => {
//   const [articles, setArticles] = useState([]);
//   const [articleCategory, setArticleCategory] = useState("science");

//   const [loading, setLoading] = useState(false);
//   // const [currentPage, setCurrentPage] = useState(1);
//   // const [articlePage] = useState(10);
//   // const lastArticleIndex = currentPage * articlePage;
//   // const firstArticleIndex = lastArticleIndex - articlePage;
//   // const currentArticle = articles.slice(firstArticleIndex, lastArticleIndex);

//   const changeUserCategory = (str) => {console.log("setUser:   " + str); setArticleCategory(str)}; /// 

//   const pageCategory = {
//     pageScience : "science",
//     pageSports : "sports",
//     pageHealth : "health",
//   }

//   useEffect(() => {
//     const getArticles = async () => {
//       setLoading(true);
//       const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${articleCategory}&apiKey=782a7379df92415ebe4dc42d9983fc99`);
//       setArticles(res.data.articles);
//       setLoading(false);
//     };
//     getArticles();
//   }, [articleCategory]);
//   return (
//     <div className={style.main}>
//       <nav className="navigation">
//         <Router>
//           <ul className="routerNav">
//             <li className="routerNavItem"><Link to="./SourceItem1">Science</Link></li>
//             <li className="routerNavItem"><Link to="./SourceItem2">Sport</Link></li>
//             <li className="routerNavItem"><Link to="./SourceItem3">Health</Link></li>
//           </ul>
//           <Routes>
//             <Route path="/" element={<Navigate replace to="/SourceItem1"/>} />
//             <Route exact path="/SourceItem1" element={<SourceItem articleData={articles} page={pageCategory.pageScience} changeUserCategory={changeUserCategory} />} />
//             <Route exact path="/SourceItem2" element={<SourceItem articleData={articles} page={pageCategory.pageSports}  changeUserCategory={changeUserCategory} />} />
//             <Route exact path="/SourceItem3" element={<SourceItem articleData={articles} page={pageCategory.pageHealth}  changeUserCategory={changeUserCategory} />} />
//           </Routes>
//         </Router>
//       </nav>
//     </div>
//   );
// };

// export default Main;