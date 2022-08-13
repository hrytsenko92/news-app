import React, {useState, useEffect} from "react";
import axios from "axios";
import './general.module.css';



const General = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if(fetching) {
      console.log(fetching);
      axios.get(`https://newsapi.org/v2/top-headlines?country=ua&page=${currentPage}&pageSize=5&apiKey=782a7379df92415ebe4dc42d9983fc99`)
      .then(response => {console.log(response); setArticles([...articles, ...response.data.articles]); setCurrentPage(prevState => prevState + 1);})
      .finally(() => setFetching(false));
    }
  }, [fetching])

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return  function () {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  const scrollHandler = (e) => {
    if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 ) {
      console.log("scroll");}
   setFetching(true);
  }

    return (
      <div className='general'>
        <div className="test">{articles.map(
          articles => <div key={articles.publishedAt}>{articles.author}</div>
        )}</div>
      </div>
    );
  }
  
  export default General;