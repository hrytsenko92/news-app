import style from './header.module.css'
import Logo from './logo/Logo.jsx'
import Title from './title/Title.jsx';
import Weather from './weather/Weather.jsx';

const Header = () => {
    return (
      <div className={style.header}>
        <Logo className={style.logo}/>
        <Title className={style.title}/>
        <Weather className={style.weather}/>
      </div>
    );
  }
  
  export default Header;