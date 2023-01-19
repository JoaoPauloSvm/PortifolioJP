import React from "react";
import MyPhoto from '../../img/foto.jpg';

export default function Sobre(props){
    return(
        <div className="sobre">
            <span className="texto">
            {props.sobre}

            </span>
            <img className="photo" src={MyPhoto} alt="Foto Pessoal" />
        </div>
    )
}