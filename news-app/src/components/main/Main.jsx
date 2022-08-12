import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import style from './main.module.css'

import General from './General';
import Sport from './Sport';
import Health from './Health'
import Cars from './Cars';
import Economics from './Economics';



const Main = () => {
    return (
      <div className={style.main}>
        <Router>
                <li><Link to="./General">General</Link></li>
                <li><Link to="./Sport">Sport</Link></li>
                <li><Link to="./Health">Health</Link></li>
                <li><Link to="./Cars">Cars</Link></li>
                <li><Link to="./Economics">Economics</Link></li>
            <Routes>
                <Route path="./General" component={General}/>
                <Route path="./Sport" component={Sport}/>
                <Route path="./Health" component={Health}/>
                <Route path="./Cars" component={Cars}/>
                <Route path="./Economics" component={Economics}/>
            </Routes>
        </Router>
      </div>
    )
  }
  
  export default Main;