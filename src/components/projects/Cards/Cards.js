import './Cards.css'

function Cards(props){
    return(
        <div className='conteiner'>
            <img src={props.image} id="img" alt='imgCard'/>
            <div className='title'>{props.title}</div>
            <div>Tecnologias Usadas: <strong>{props.tecList}</strong></div>
            <div className='text'>{props.text}</div>
            <div className='link'><a href={props.link}>Link</a></div>
        </div>
    )
}

export default Cards;