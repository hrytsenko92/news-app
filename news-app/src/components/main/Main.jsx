import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import style from "./main.module.css";

import General from "./General";
import Sport from "./Sport";
import Health from "./Health";
import Cars from "./Cars";
import Economics from "./Economics";

const Main = () => {
  return (
    <div className={style.main}>
      <nav className="navigation">
        <Router>
          <ul className="routerNav">
            <li className="routerNavItem"><Link to="./General">General</Link></li>
            <li className="routerNavItem"><Link to="./Sport">Sport</Link></li>
            <li className="routerNavItem"><Link to="./Health">Health</Link></li>
            <li className="routerNavItem"><Link to="./Cars">Cars</Link></li>
            <li className="routerNavItem"><Link to="./Economics">Economics</Link></li>
          </ul>
          <Routes>
            <Route path="/General" element={<General/>} />
            <Route path="/Sport" element={<Sport/>} />
            <Route path="/Health" element={<Health/>} />
            <Route path="/Cars" element={<Cars/>} />
            <Route path="/Economics" element={<Economics/>} />
          </Routes>
        </Router>
      </nav>
    </div>
  );
};

export default Main;
