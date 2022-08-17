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

const Main = () => {
  return (
    <div>
      <Router>
        <ul className="routerNav">
          <li className="routerNavItem">
            <Link to="./PageScience">Science</Link>
          </li>
          <li className="routerNavItem">
            <Link to="./PageSport">Sport</Link>
          </li>
          <li className="routerNavItem">
            <Link to="./PageHealth">Health</Link>
          </li>
          <li className="routerNavItem">
            <Link to="./PageTechnology">Technology</Link>
          </li>
        </ul>
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
