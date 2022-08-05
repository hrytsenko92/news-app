import style from "./title.module.css";
import bef from './before.svg'
import aft from './after.svg'

const Title = () => {
  return (
    <div className="title">
      <h1>News In Ukraine</h1>
      <div className="dateList">
      <img src={bef} alt="before" className={style.beforeImg}/>
      <div>
        <span>{getCurrentDate()}</span>
      </div>
      <img src={aft} alt="after" className={style.afterImg}/>
      </div>

    </div>
  );
};

let getCurrentDate = (separator1=' ', separator2=',  ') => {
    let today = new Date();
    let date = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    return `${date}${separator1}${month<10?`0${month}`:`${month}`}${separator2}${year}` 
  };

export default Title;