import React from "react";
import Sobre from "./conteudo/sobre";
import Conhecimento from "./conteudo/conhecimento";
import Educacao from "./conteudo/educacao";

export default function Conteudo(props){
    return(
        <div className="conteudo">
            
            <Sobre sobre = "Eu sou uma pessoa apaixonada por tecnologia e sempre estou em busca de novos conhecimentos e habilidades. Já possuo algum conhecimento prático em áreas como HTML, CSS, JavaScript e MySQL. Já trabalhei com frameworks como React e Bootstrap, e estou atualmente estudando React Native para ampliar meus conhecimentos em desenvolvimento de aplicativos. Embora ainda esteja adquirindo experiência e habilidades, eu tenho uma boa compreensão dos conceitos básicos e estou ansioso para aplicar meus conhecimentos em projetos reais. Estou sempre buscando aprender mais sobre novas tecnologias e tendências no campo e estou disposto a colaborar e trabalhar em projetos desafiadores."/>
            <Educacao titulo = "Educação" mes = "out" text = "Atualmente" programa = "Programa" curso = "Gestão da Tecnologia da Informação"/>
            <Conhecimento conhecimento = "Conhecimento"/>
        
        </div>
    )
}