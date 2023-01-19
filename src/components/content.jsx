import React from "react";
import Sobre from "./conteudo/sobre";
import Conhecimento from "./conteudo/conhecimento";
import Educacao from "./conteudo/educacao";

export default function Content(){
    return(
        <div className="conteudo">
            
        <Sobre sobre = "I'm a technology enthusiast and always looking for new knowledge and skills. I have some practical knowledge in areas such as HTML, CSS, JavaScript, and MySQL. I have worked with frameworks such as React and Bootstrap, and I am currently studying React Native to expand my knowledge in app development. Although I am still gaining experience and skills, I have a good understanding of the basics and am eager to apply my knowledge in real projects. I'm always looking to learn more about new technologies and trends in the field and am willing to collaborate and work on challenging projects"/>
        <Educacao titulo = "Education" mes = "oct" text = "Actually" programa = "Program" curso = "Information Technology"/>
        <Conhecimento conhecimento = "knowledge"/>
    
    </div>
    )
}