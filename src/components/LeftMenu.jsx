function LeftMenu(props) {
    return(
        <div className='left-menu'>
            <span onClick={props.click} className='link-reg-bascket'>вход | регистрация</span>
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
    );
}

export default LeftMenu;