const Pagination = (props) => {
  const { articlePage } = props;
  const { totalArticles } = props;
  const { paginate } = props;
  const { prevPage } = props;
  const { nextPage } = props;

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalArticles / articlePage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li className="pageItem" key={number}>
            <button className="pageLink" onClick={() => paginate(number)}>
              {number}
            </button>
          </li>
        ))}
      </ul>
      <button className="pagePrev" onClick={prevPage}></button>
      <button className="pageNext" onClick={nextPage}></button>
    </div>
  );
};

export default Pagination;
