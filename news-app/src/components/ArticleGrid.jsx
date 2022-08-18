const ArticleGrid = (props) => {
  const { articles } = props;
  const { loading } = props;

  if (loading) {
    return <h2>Loading...</h2>;
  } else
    return (
      <div className="articleGrid">
          {articles.map((articles) => (
            <div className="itemWrapper" key={articles.publishedAt}>
              <div className="imageWrap">
              <img src={articles.urlToImage} alt="articleImg" className="itemImg" />
              <span className="itemTitle">{articles.title}</span>
              </div>
              <div className="contentWrap">
                <span className="ItemDescription">{articles.description}</span>
                <div className="hrLine"></div>
                <div className="btnWrap">
                  <a href={articles.url} target="_blank" className="btnItem">Read More</a>
                </div>
              </div>
            </div>
          ))}
      </div>
    );
};

export default ArticleGrid;
