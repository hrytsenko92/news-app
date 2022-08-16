import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./main.module.css";


const Main = () => {
  const [articles, setArticles] = useState([]);
  const [articleCategory, setArticleCategory] = useState("science");

  const [loading, setLoading] = useState(false);

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
  }, []);
  return (
    <div className='Main'>
      <button className={style.btnChangeCategory} onClick={setArticleCategory(pageCategory.pageScience)}></button>
      <button className={style.btnChangeCategory} onClick={setArticleCategory(pageCategory.pageSports)}></button>
      <button className={style.btnChangeCategory} onClick={setArticleCategory(pageCategory.pageHealth)}></button>
    </div>
  );
}

export default Main;