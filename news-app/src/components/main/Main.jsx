import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./main.module.css";


const Main = () => {
  const [articles, setArticles] = useState([]);
  const [articleCategory, setArticleCategory] = useState("science");
  console.log(articles);

  const [loading, setLoading] = useState(false);

  const setCategory = (str) => setArticleCategory(str);
  const pageCategory = {
    pageScience : "science",
    pageSports : "sports",
    pageHealth : "health",
  }
  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${articleCategory}&apiKey=782a7379df92415ebe4dc42d9983fc99`);
      setArticles(res.data.articles);
      setLoading(false);
    };
    getArticles();
  }, [articleCategory]);
  return (
    <div className='Main'>
      <button className={style.btnChangeCategory} onClick={()=> {setCategory(pageCategory.pageScience)}}></button>
      <button className={style.btnChangeCategory} onClick={()=> {setCategory(pageCategory.pageSports)}}></button>
      <button className={style.btnChangeCategory} onClick={()=> {setCategory(pageCategory.pageHealth)}}></button>
      <div>{articles.map((articles) =>
        <span key={articles.publishedAt}>{articles.description}</span>
      )}</div>
    </div>
  );
}

export default Main;