import Logo from './logo/Logo.jsx'
import style from './header.module.css'
import Title from './title/Title.jsx';

const Header = () => {
    return (
      <div className={style.header}>
        <Logo/>
        <Title/>
      </div>
    );
  }
  
  export default Header;