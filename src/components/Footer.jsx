import icon_1 from '../images/icon1.svg'
import icon_2 from '../images/icon2.svg'
import icon_3 from '../images/icon3.svg'
import icon_4 from '../images/icon4.svg'
import Card from './Card';

function Footer() {
    return(
      <footer className='footer'>
        <div className='ovhid'>
            <Card icon={icon_1} title='ПОПУЛЯРНОЕ' info='НА ЭТОЙ НЕДЕЛИ'/>
        </div>
        <div className='ovhid'>
            <Card icon={icon_2} title='НОВИНКИ' info='САМЫЕ СВЕЖИЕ ТОВАРЫ'/>
        </div>
        <div className='ovhid'>
            <Card icon={icon_3} title='ДЛЯ ДОМА' info='ДЛЯ ВАШЕГО УЮТА'/>
        </div>
        <div className='ovhid'>
            <Card icon={icon_4} title='ДЛЯ ДАЧИ' info='УКРАСЬТЕ ВАШ УЧАСТОК'/>
        </div>
      </footer>
    );
}

export default Footer;