import style from "./main.module.css";
const UserDate = () => {
  return (
    <div className={style.back}>
        <div>{getCurrentDate()}</div>
    </div>
  );
};

let getCurrentDate = (separator1=' - ', separator2=' - ', separator3=" Year") => {
    let today = new Date();
    let date = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    return `${date}${separator1}${month<10?`0${month}`:`${month}`}${separator2}${year}${separator3}` 
  };

export default UserDate;