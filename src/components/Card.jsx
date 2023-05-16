function Card(props) {
    return(
        <div className='card'>
            <img src={props.icon} alt={props.title} className='card-icon'></img>
            <h3 className='card-title'>{props.title}</h3>
            <p className='card-info'>{props.info}</p>
        </div>
    );
}
export default Card;