import { useEffect, useState } from "react";

const SourceItem = (props) => {
    const {category} = props;
    const {UserCategory} = props;
    const {articleData} = props;
    const [receivedData, setReceivedData] = useState("Loading...");
    useEffect(()=>{
        const pushReceivedData = () => {setReceivedData(articleData)}
        UserCategory(category)
        pushReceivedData();
    },[articleData])
    console.log(receivedData);    
    return (
      <div className='sourceItem'>
        {/* <span>{as}</span> */}
        <span>{"span:   " + category}</span>
      </div>
    );
  }
  
  export default SourceItem;