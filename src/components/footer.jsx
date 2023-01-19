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
                <a href="" target="_blank"><img src={Git} alt="" /></a>
                <a href="" target="_blank"><img src={Instagram} alt="" /></a>
                <a href="" target="_blank"><img src={Linkedin} alt="" /></a>
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