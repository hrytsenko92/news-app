import style from "./main.module.css";
import PageHealth from "./PageHealth";

const Main = () => {
  return (
    <div className={style.main}>
      <PageHealth/>
    </div>
  );
}

export default Main;