import dev from '../images/dev-img.png'
function Popup(props) {
    return(
        <div className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <h3 className="popup__title">{props.title}</h3>
                <img className="popup-img" src={dev} alt="dev-img"></img>
                <button onClick={props.close} className="popup__close" type="button"></button>
            </div>
        </div>
    );
}

export default Popup;