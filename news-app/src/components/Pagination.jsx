import style from "./main.module.css";
const Pagination = (props) => {
  const { articlePage } = props;
  const { totalArticles } = props;
  const { paginate } = props;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalArticles / articlePage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className={style.paginationWrap}>
      <ul className={style.pagination}>
        {pageNumbers.map((number) => (
          <li className={style.pageItem} key={number}>
            <button className={style.pageLink} onClick={() => paginate(number)}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
