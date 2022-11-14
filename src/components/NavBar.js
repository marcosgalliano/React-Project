import logo from '../assets/img/logo.png';
import Cart from './CartWidget'

const Header = () => {
    return(
      <>
      <header className="header">
        <div className='div_logo'>
           <img src={logo} alt="logo" className='img_logo'/> 
           <h4>Teccno Market</h4>
        </div>
        <div className='div_categorias'>
          <ul className='ul_categorias'>
            <li>Categoria 1</li>
            <li>Categoria 2</li>
            <li>Categoria 3</li>
          </ul>
        </div>
        <Cart />
      </header>
      </>  
    )
  }

  export default Header;