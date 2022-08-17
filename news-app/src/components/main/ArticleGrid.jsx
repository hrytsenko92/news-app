const ArticleGrid = (props) => {
  const { articles } = props;
  const { loading } = props;

  if (loading) {
    return <h2>Loading...</h2>;
  } else
    return (
      <div className="articleGrid">
        <div>
          {articles.map((articles) => (
            <div key={articles.publishedAt}>{articles.title}</div>
          ))}
        </div>
      </div>
    );
};

export default ArticleGrid;
