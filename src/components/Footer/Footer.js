import './Footer.css'
import { FaWhatsapp, FaLinkedinIn, FaGithub } from 'react-icons/fa'

function Footer(){
    return(
        <div className='footer'>
            <div>
			@_ danielgoulart
			</div> 
			<div id='right'>
				<div className="icon">Contato:</div>
				<a href="https://wa.me/5548996035040"><FaWhatsapp className="icon"/></a>
				<a href="https://www.linkedin.com/in/daniel-gon%C3%A7alves-goulart-3350b91b8/"><FaLinkedinIn className="icon"/></a>
				<a href='https://github.com/DanielGou'><FaGithub className="icon"/></a>
			</div>
        </div>
    )
}

export default Footer;