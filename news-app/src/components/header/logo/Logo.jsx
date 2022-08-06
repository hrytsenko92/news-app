import style from './logo.module.css'
import logoSvg from './logo-2.svg'

const Logo = () => {
    return (
      < >
        <img src={logoSvg} alt="logo" className={style.logoImg} />
      </>
    );
  }
  
  export default Logo;