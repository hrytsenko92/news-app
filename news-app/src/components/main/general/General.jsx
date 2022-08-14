// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import style from "./general.module.css";

// const General = () => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [articlePage] = useState(10);

//   const lastArticleIndex = currentPage * articlePage;
//   const firstArticleIndex = lastArticleIndex - articlePage;
//   const currentArticle = articles.slice(firstArticleIndex, lastArticleIndex);

//   useEffect(() => {
//     const getArticles = async () => {
//       setLoading(true);
//       const res = await axios.get(
//         `https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=782a7379df92415ebe4dc42d9983fc99`
//       );
//       console.log(res.data.articles);
//       setArticles(res.data.articles);
//       setLoading(false);
//     };

//     getArticles();
//   }, []);

//   return (
//     <div className={style.general}>
//       <div className={style.test}>
//         {articles.map((articles) => (
//           <div className={style.test2} key={articles.publishedAt}>
//             {articles.description}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default General;
