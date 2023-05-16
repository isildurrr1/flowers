import { useState } from 'react'
import grass from '../images/grass.jpg'
import LeftMenu from './LeftMenu'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import Popup from './Popup'


function App() {
  const[registrationPopup, setRegistrationPopup] = useState(false);
  const[basketPopup, setBasketPopup] = useState(false);

  function registrationClick() { setRegistrationPopup(true) };
  function basketClick() { setBasketPopup(true) };
  function closeAllPopups() {
    setRegistrationPopup(false);
    setBasketPopup(false);
  }

  return (
    <div className='page'>
      <div className="App">
        <LeftMenu click={registrationClick}/>
        <div className='main'>
          <Header click={basketClick}/>
          <Content/>
        </div>
        <img src={grass} alt='grass' className='menu-img'></img>
        <Footer/>
        <Popup title="Форма регистрации" isOpen={registrationPopup} close={closeAllPopups}/>
        <Popup title="Ваша корзина" isOpen={basketPopup} close={closeAllPopups}/>
      </div> 
    </div>    
  );
}

export default App;
