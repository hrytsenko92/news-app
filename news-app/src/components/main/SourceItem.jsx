
const SourceItem = (props) => {
    const {category} = props;
    const {articleData} = props;
    const {as} = props;
    return (
      <div className='sourceItem'>
        <span>{as}</span>
        <span>{category}</span>
        {/* <div>{articleData}</div> */}
      </div>
    );
  }
  
  export default SourceItem;