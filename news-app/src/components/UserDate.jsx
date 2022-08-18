
const UserDate = () => {
  return (
    <div className="date">
        <span>{getCurrentDate()}</span>
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

export default UserDate;