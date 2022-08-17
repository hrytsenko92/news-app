

const Pagination = (props) => {
    const {articlePage} = props;
    const {totalArticles} = props;
    const {paginate} = props;

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalArticles/articlePage); i++) {
        pageNumbers.push(i);
    }
  return (
    <div >
        <ul className="pagination">
            {
                pageNumbers.map(number => (
                    <li className="pageItem" key={number}>
                        <a href="!#" className="pageLink" onClick={() => paginate(number)}>
                            {number}
                        </a>
                    </li>
                ))
            }
        </ul>
    </div>
  );
}

export default Pagination;