import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from "react-router-dom";
import PageScience from "./PageScience";
import PageSports from "./PageSport";
import PageHealth from "./PageHealth";
import PageTechnology from "./PageTechnology";
import style from "./main.module.css";
import UserDate from "./UserDate";
import Weather from "./Weather";

const Main = () => {
  return (
    <div className={style.main}>
      <Router>
        <div className={style.header}>
          <div className={style.headerWrapper}>
            <div className={style.logoItem}>
              <span className={style.logoText}>News</span>
            </div>
            <ul className={style.routerNav}>
              <li className={style.routerNavItem}>
                <Link to="./PageScience">Science</Link>
              </li>
              <li className={style.routerNavItem}>
                <Link to="./PageSport">Sport</Link>
              </li>
              <li className={style.routerNavItem}>
                <Link to="./PageHealth">Health</Link>
              </li>
              <li className={style.routerNavItem}>
                <Link to="./PageTechnology">Technology</Link>
              </li>
            </ul>
            <div className={style.weatherAndDate}>
              <UserDate />
              <Weather />
            </div>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Navigate replace to="/PageScience" />} />
          <Route path="/PageScience" element={<PageScience />} />
          <Route path="/PageSport" element={<PageSports />} />
          <Route path="/PageHealth" element={<PageHealth />} />
          <Route path="/PageTechnology" element={<PageTechnology />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Main;
