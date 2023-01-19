import React from "react";

import Html from '../../img/html.png';
import Css from '../../img/css-3.png';
import Javascript from '../../img/js.png';
import Mysql from '../../img/mysql.png';
import R from '../../img/react.png';
import Rnative from '../../img/react-native.png';
import Bootstrap from '../../img/bootstrap.png';
import Php from '../../img/php.png';
import Think from '../../img/design-thinking.png';
import Scrum from '../../img/scrum.png';

export default function Conhecimento(props){
    return(
        <div className="linguagens">
            <h1>{props.conhecimento}</h1>
        <div className="conhecimento">
            <ul>    
                <li><img src={Html} alt="" />HTML</li>
                <li><img src={Css} alt="" />CSS</li>
                <li><img src={Javascript} alt="" />Javascript</li>
                <li><img src={Php} alt="" />PHP</li>
                <li><img src={Mysql} alt="" />MySQL</li>    
            </ul>
            <ul>
                <li><img src={Bootstrap} alt="" />Bootstrap</li>
                <li><img src={Think} alt="" />Design Thinking</li>
                <li><img src={R} alt="" />React</li>
                <li><img src={Rnative} alt="" style={{width: "32px"}} />React Native</li>
                <li><img src={Scrum} alt="" />Scrum</li>  
            </ul>
        </div>
        </div>
    )
}