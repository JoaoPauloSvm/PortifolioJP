import React from "react";
import Git from '../img/github.png';
import Instagram from '../img/instagram.png';
import Linkedin from '../img/linkedin.png';

export default function Footer(props){

    const date = new Date();
    const year = date.getFullYear();

    return(
        <div style={styles} className="footer">
            <div style={styles.image}>
                <a href="https://github.com/JoaoPauloSvm" target="_blank"><img src={Git} alt="Logo Git" /></a>
                <a href="https://www.instagram.com/joaopaulosvm/" target="_blank"><img src={Instagram} alt="Logo Instagram" /></a>
                <a href="https://www.linkedin.com/in/jo%C3%A3o-paulo-svm-3881741b6/" target="_blank"><img src={Linkedin} alt="Logo Linkedin" /></a>
            </div>
            <span style={styles.fonte}>{props.texto}</span>
            <span style={styles.fonte}>João Paulo Souza dos Santos</span>
            <span style={styles.fonte}>2022 - {year}</span>
        </div>
    )
}

const styles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    justifyContent: "center",
    boxShadow: "1px 1px 3px 3px #031634",
    fonte: {
        fontSize: "14px",
    },
    image: {
        display: "flex",
        gap: "10px"
    }
}