import './App.css';
import grass from './images/grass.jpg'
import logo from './images/logo.jpg'
import basket from './images/basket.svg'
import icon_1 from './images/icon1.svg'
import icon_2 from './images/icon2.svg'
import icon_3 from './images/icon3.svg'
import icon_4 from './images/icon4.svg'


function App() {
  return (
    <div className='page'>
      <div className="App">
      <div className='left-menu'>
        <a className='link-reg-bascket' href='https://www.google.com/'>вход | регистрация</a>
        <ul className='left-menu-list'>
          <li className='link'>О компании</li>
          <li className='link'>Вопрос-ответ</li>
          <li className='link'>Вакансии</li>
          <li className='link'>Видео</li>
          <li className='link'>Новости</li>
          <li className='link'>Магазины</li>
        </ul>
        <div className='contacts'>
          <p className='tel'>+7 (383) 363-05-05</p>
          <button className='btn btn-contacts'>СВЯЗАТЬСЯ</button>
        </div>
      </div>
      <div className='main'>
        <header className="header">
          <img src={logo} alt='logo' className='logo'></img>
          <ul className='header-menu-list'>
            <li className='link'>Каталог</li>
            <li className='link'>Акции</li>
            <li className='link'>Услуги</li>
          </ul>
          <div className='search-panel'>
            <a className='link-reg-bascket' href='https://www.google.com/'>
              <img style={{width:'16px'}} src={basket} alt={basket}></img> | корзина</a>
            <input className='search' placeholder='Поиск'></input>
          </div>
        </header>
        <div className='content'>
          <div className='main-content'>
            <div className='main-text'>
              <h1 className='title_h1'>Цветы</h1>
              <h2 className='title_h2'>на любой вкус</h2>
              <p className='subtitle'>в одном месте</p>
            </div>
            <button className='btn btn-main'>&#9658; УЗНАТЬ О НАС БОЛЬШЕ</button>
          </div>
        </div>
      </div>
      <img src={grass} alt='grass' className='menu-img'></img>
      <footer className='footer'>
        <div className='ovhid'>
          <div className='card'>
            <img src={icon_1} alt='icon_1' className='card-icon'></img>
            <h3 className='card-title'>ПОПУЛЯРНОЕ</h3>
            <p className='card-info'>НА ЭТОЙ НЕДЕЛИ</p>
          </div>
        </div>
        <div className='ovhid'>
          <div className='card'>
            <img src={icon_2} alt='icon_2' className='card-icon'></img>
            <h3 className='card-title'>НОВИНКИ</h3>
            <p className='card-info'>САМЫЕ СВЕЖИЕ ТОВАРЫ</p>
          </div>
        </div>
        <div className='ovhid'>
          <div className='card'>
            <img src={icon_3} alt='icon_3' className='card-icon'></img>
            <h3 className='card-title'>ДЛЯ ДОМА</h3>
            <p className='card-info'>ДЛЯ ВАШЕГО УЮТА</p>
          </div>
        </div>
        <div className='ovhid'>
          <div className='card'>
            <img src={icon_4} alt='icon_4' className='card-icon'></img>
            <h3 className='card-title'>ДЛЯ ДАЧИ</h3>
            <p className='card-info'>УКРАСЬТЕ ВАШ УЧАСТОК</p>
          </div>
        </div>
        
      </footer>
      </div>
      </div>
  );
}

export default App;
