import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./main.module.css";

// import General from "./general/General";
// import Sport from "./sport/Sport";
// import Health from "./health/Health";
// import Cars from "./cars/Cars";
// import Economics from "./economics/Economics";

import SourceItem from './SourceItem';

const Main = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlePage] = useState(10);

  const lastArticleIndex = currentPage * articlePage;
  const firstArticleIndex = lastArticleIndex - articlePage;
  const currentArticle = articles.slice(firstArticleIndex, lastArticleIndex);


  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=782a7379df92415ebe4dc42d9983fc99`
      );
      console.log(res.data.articles);
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

console.log(contentCategoryData);


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
            <Route path="/SourceItem1" element={<SourceItem articleData={articles} category={contentCategoryData.pageScience}  as={"science"} />} />
            <Route path="/SourceItem2" element={<SourceItem articleData={articles} category={contentCategoryData.pageSports}  as={"sport"} />} />
            <Route path="/SourceItem3" element={<SourceItem articleData={articles} category={contentCategoryData.pageHealth}  as={"health"} />} />
          </Routes>
        </Router>
      </nav>
    </div>
  );
};

export default Main;




/*

  <Router>
          <ul className="routerNav">
            <li className="routerNavItem"><Link to="./general/General">General</Link></li>
            <li className="routerNavItem"><Link to="./sport/Sport">Sport</Link></li>
            <li className="routerNavItem"><Link to="./health/Health">Health</Link></li>
            <li className="routerNavItem"><Link to="./cars/Cars">Cars</Link></li>
            <li className="routerNavItem"><Link to="./economics/Economics">Economics</Link></li>
          </ul>
          <Routes>
            <Route path="/general/General" element={<General/>} />
            <Route path="/sport/Sport" element={<Sport/>} />
            <Route path="/health/Health" element={<Health/>} />
            <Route path="/cars/Cars" element={<Cars/>} />
            <Route path="/economics/Economics" element={<Economics/>} />
          </Routes>
        </Router>

*/
