import React from "react";
import Sobre from "./conteudo/sobre";
import Conhecimento from "./conteudo/conhecimento";

export default function Conteudo(props){
    return(
        <div className="conteudo">
            
            <Sobre/>
            <Conhecimento/>
        
        </div>
    )
}