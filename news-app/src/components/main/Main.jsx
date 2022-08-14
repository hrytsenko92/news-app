import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./main.module.css";
import SourceItem from './SourceItem';

const Main = () => {
  const [articles, setArticles] = useState([]);
  const [articleCategory, setArticleCategory] = useState('science');

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlePage] = useState(10);

  const lastArticleIndex = currentPage * articlePage;
  const firstArticleIndex = lastArticleIndex - articlePage;
  const currentArticle = articles.slice(firstArticleIndex, lastArticleIndex);

  const setUserCategory = (str) => {console.log("setUser:   " + str); setArticleCategory(str)};


  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${articleCategory}&apiKey=782a7379df92415ebe4dc42d9983fc99`
      );
      // console.log(res.data.articles);
      setArticles(res.data.articles);
      setLoading(false);
    };

    getArticles();
  }, []);

const contentCategoryData = {
  pageScience : "science",
  pageSports : "sports",
  pageHealth : "health",
}


  return (
    <div className={style.main}>
      <nav className="navigation">
        <Router>
          <ul className="routerNav">
            <li className="routerNavItem"><Link to="./SourceItem1">Science</Link></li>
            <li className="routerNavItem"><Link to="./SourceItem2">Sport</Link></li>
            <li className="routerNavItem"><Link to="./SourceItem3">Health</Link></li>
          </ul>
          <Routes>
            <Route path="/SourceItem1" element={<SourceItem articleData={articles} category={contentCategoryData.pageScience} setUserCategory={setUserCategory} />} />
            <Route path="/SourceItem2" element={<SourceItem articleData={articles} category={contentCategoryData.pageSports}  setUserCategory={setUserCategory} />} />
            <Route path="/SourceItem3" element={<SourceItem articleData={articles} category={contentCategoryData.pageHealth}  setUserCategory={setUserCategory} />} />
          </Routes>
        </Router>
      </nav>
    </div>
  );
};

export default Main;