
const SourceItem = (props) => {
    const {category} = props;
    const {setUserCategory} = props;
    const {articleData} = props;
    const {as} = props;

    console.log(articleData);


    setUserCategory(category)
    return (
      <div className='sourceItem'>
        <span>{as}</span>
        <span>{"span:   " + category}</span>
        {/* <div>{articleData}</div> */}
      </div>
    );
  }
  
  export default SourceItem;