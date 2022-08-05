import style from './logo.module.css'
import logoPng from './logo-2.png'

const Logo = () => {
    return (
      < >
        <img src={logoPng} alt="logo" className={style.logoImg} />
      </>
    );
  }
  
  export default Logo;