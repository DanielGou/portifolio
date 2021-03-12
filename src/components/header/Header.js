import './Header.css'
import myImg from '../../assets/EU.jpg'

function Header(){
    return(
        <header className="header">
            <img id='myImg' src={myImg} alt="Minha imagem"/>
            <div className="myContent">
                <div id="myName">
                    Daniel Gonçalves Goulart
                </div>
                <div>
                    Programador JavaScript
                </div>
                <div id="stack">
                    <strong>Front-end:</strong> ReactJS e Bootstrap <br/>
                    <strong>Back-end:</strong> NodeJS <br/>
                    <strong>Banco de Dados:</strong> MongoDB <br/>
                    <strong>Desktop:</strong> ElectronJS
                </div>
            </div>
        </header>
    )
}

export default Header;