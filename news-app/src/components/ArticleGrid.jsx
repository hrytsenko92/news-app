import style from "./articleGrid.module.css";
const ArticleGrid = (props) => {
  const { articles } = props;
  const { loading } = props;

  if (loading) {
    return <h2>Loading...</h2>;
  } else
    return (
      <div className={style.articleGrid}>
        {articles.map((articles) => (
          <div className={style.itemWrapper} key={articles.publishedAt}>
            <div className={style.imageWrap}>
              <img
                className={style.itemImg}
                src={articles.urlToImage}
                alt="articleImg"
              />
              <div className={style.itemTitle}>{articles.title}</div>
            </div>
            <div className={style.contentWrap}>
              <p className={style.ItemDescription}>{articles.description}</p>
              <div className={style.hrLine}></div>
              <div className={style.btnWrap}>
                <a
                  href={articles.url}
                  target="_blank"
                  className={style.btnItem}
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
};

export default ArticleGrid;