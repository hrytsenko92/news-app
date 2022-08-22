import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticleGrid from "./ArticleGrid";
import Pagination from "./Pagination";

const PageSport = () => {
  const [articles, setArticles] = useState([]);
  console.log(articles);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlePage] = useState(7);
  const lastArticleIndex = currentPage * articlePage;
  const firstArticleIndex = lastArticleIndex - articlePage;
  const currentArticle = articles.slice(firstArticleIndex, lastArticleIndex);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&category=sport&pageSize=80&apiKey=782a7379df92415ebe4dc42d9983fc99`
      );
      setArticles(res.data.articles);
      setLoading(false);
    };
    getArticles();
  }, []);
  return (
    <div className="pageHealth">
      <ArticleGrid articles={currentArticle} loading={loading} />
      <Pagination
        articlePage={articlePage}
        totalArticles={articles.length}
        paginate={paginate}
      />
    </div>
  );
};

export default PageSport;