import style from "./main.module.css";
const UserDate = () => {
  return (
    <div className={style.front}>
      <div>{getCurrentTime()}</div>
      <div>{getCurrentDate()}</div>
    </div>
  );
};

let getCurrentTime = (separator = " : ") => {
  let today = new Date();
  let hours = today.getHours();
  let minutesZeros = (t) => {
    return (t.getMinutes() < 10 ? "0" : "") + t.getMinutes();
  };
  let minutes = minutesZeros(today);
  return `${hours}${separator}${minutes}`;
};

let getCurrentDate = (separator1 = " - ", separator2 = " - ") => {
  let today = new Date();
  let date = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  return `${date}${separator1}${
    month < 10 ? `0${month}` : `${month}`
  }${separator2}${year}`;
};

export default UserDate;
