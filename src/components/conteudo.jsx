import React from "react";
import Sobre from "./conteudo/sobre";
import Conhecimento from "./conteudo/conhecimento";
import Educacao from "./conteudo/educacao";

export default function Conteudo(props){
    return(
        <div className="conteudo">
            
            <Sobre/>
            <Educacao/>
            <Conhecimento/>
        
        </div>
    )
}