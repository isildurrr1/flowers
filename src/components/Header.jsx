import logo from '../images/logo.jpg'
import basket from '../images/basket.svg'

function Header(props) {
    return(
        <header className="header">
          <img src={logo} alt='logo' className='logo'></img>
          <ul className='header-menu-list'>
            <li className='link'>Каталог</li>
            <li className='link'>Акции</li>
            <li className='link'>Услуги</li>
          </ul>
          <div className='search-panel'>
            <span onClick={props.click} className='link-reg-bascket'>
              <img style={{width:'16px'}} src={basket} alt={basket}></img> | корзина</span>
            <input className='search' placeholder='Поиск'></input>
          </div>
        </header>
    );
}
export default Header;