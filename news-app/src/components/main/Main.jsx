import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import style from './main.module.css'

import NewsAuto from './NewsAuto';
import General from './General';

const Main = () => {
    return (
      <div className={style.main}>
        <Router>
            <nav className={style.router}>
                <li><Link to="./General">General</Link></li>
                {/* <li><link to=""></link></li>
                <li><link to=""></link></li>
                <li><link to=""></link></li> */}
                <li><Link to="./NewsAuto">Auto</Link></li>
            </nav>
            <Routes>
                <Route exact path="./General" component={General}/>
                {/* <Route exact path="/" component={}/>
                <Route exact path="/" component={}/>
                <Route exact path="/" component={}/> */}
                <Route exact path="./NewsAuto" component={NewsAuto}/>
            </Routes>
        </Router>
      </div>
    )
  }
  
  export default Main;