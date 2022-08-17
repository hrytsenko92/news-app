import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticleGrid from "./ArticleGrid";
import style from "./pageHealth.module.css";
import Pagination from "./Pagination";

const PageHealth = () => {
  const [articles, setArticles] = useState([]);
  console.log(articles);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlePage] = useState(5);

  const lastArticleIndex = currentPage * articlePage;
  const firstArticleIndex = lastArticleIndex - articlePage;
  const currentArticle = articles.slice(firstArticleIndex, lastArticleIndex);

  const paginate = pageNumber => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(prev => prev +1)
  const prevPage = () => setCurrentPage(prev => prev -1)


  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=782a7379df92415ebe4dc42d9983fc99`);
      setArticles(res.data.articles);
      setLoading(false);
    };
    getArticles();
  }, []);
  return (
    <div className='pageHealth'>
      <ArticleGrid articles={currentArticle} loading={loading}/>
      <Pagination articlePage={articlePage} totalArticles={articles.length} paginate={paginate}/>
      <button className="pagePrev" onClick={prevPage}></button>
      <button className="pageNext" onClick={nextPage}></button>
    </div>
  );
}

export default PageHealth;