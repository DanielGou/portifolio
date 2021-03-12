import './Projects.css'
import Card from './Cards/Cards'
import printVipSoftware from '../../assets/printVip.png'
import editorImage from '../../assets/imageEditorHome.png'
import sendFiletoKindleIMG from '../../assets/SendFileToKindleMain.png'
import chatIMG from '../../assets/chatIMG.png'
import pdrIMG from '../../assets/pdr1.png'

function Projects(){
    return(
        <div>
            <div className='nameProject'><strong>Projetos</strong></div>
            <div className="projects">
                <Card 
                    image={editorImage} 
                    title="Editor Image"
                    tecList="NodeJS e EJS"
                    text="Servidor NodeJS que edita imagem, tem toda a tecnologia de upload de arquivos, edição e compressão."
                    link="https://github.com/DanielGou/image-editor"
                />
                <Card 
                    image={pdrIMG} 
                    title="Site sobre a Praia do Rosa"
                    tecList="ReactJS"
                    text="Site feito em ReactJS falando do lugar onde eu moro."
                    link="https://danielgou.github.io/pdr/"
                />
                <Card 
                    image={sendFiletoKindleIMG} 
                    title="Send file to Kindle"
                    tecList="NodeJS e EJS"
                    text="Um servidor NodeJS que envia ebooks para Amazon Kindle, usa modulos externos para enviar email e para upload de arquivos."
                    link="https://github.com/DanielGou/send-kindle"
                />                
                <Card 
                    image={chatIMG} 
                    title="Chat"
                    tecList="NodeJS e EJS"
                    text="Servidor NodeJS que usa um modulo chamado Socket.io para a troca de mensagens em tempo real."
                    link="https://github.com/DanielGou/Chat"
                />

                <Card 
                    image={printVipSoftware} 
                    title="VipSoftware"
                    tecList="ElectronJS"
                    text="Um app desktop desenvolvido com o objetivo de melhorar a produção da equipe, com ferramentas e sites."
                    link="https://github.com/DanielGou/VipSoftware"
                />
            </div>
        </div>
    )
}

export default Projects;