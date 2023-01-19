import React from "react";
import { Alert, ProgressBar, OverlayTrigger, Tooltip } from "react-bootstrap";
import IF from '../../img/favicon.ico';
import Dio from '../../img/dio-icon.png';

import moment from 'moment';

export default function Educacao() {

    const ifsudeste = "Instituto Federal de Educação, Ciência e Tecnologia do Sudeste de Minas Gerais";
    const dio = "Digital Innovation One";

    const date = new Date();
    const week = moment(date).isoWeek();
    const progresso = week + 105;

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {ifsudeste}
        </Tooltip>
    );
    const renderTooltip1 = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {dio}
        </Tooltip>
    );


    return (
        <div className="linguagens">
            <h1>Educação</h1>
            <ul className="ul">
                <li>
                    <Alert style={style}>
                        <OverlayTrigger
                            placement="left"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip1}>
                            <Alert.Heading className="head"><a className="a" href="https://web.dio.me/home" target="_blank">DIO</a> <img style={{ width: "28px" }} src={Dio} alt="" /></Alert.Heading>
                        </OverlayTrigger>
                        <p>Programa Fullstack Transforma Tec</p>
                        <hr />
                        <p className="mb-0">mar / 2022 - out / 2022</p>
                    </Alert>
                </li>
                <li>
                    <Alert style={style}>
                        <OverlayTrigger
                            placement="left"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip}
                        >
                            <Alert.Heading className="head"><a className="a" href="https://www.ifsudestemg.edu.br/" target="_blank">IF SUDESTE MG</a> <img style={{ width: "28px" }} src={IF} alt="" /></Alert.Heading>
                        </OverlayTrigger>
                        <p>Gestão da Tecnologia da Informação</p>
                        <hr />
                        <p className="mb-0">2021 - Atualmente</p>
                        <ProgressBar max={131} variant="success" animated now={progresso} />
                    </Alert>
                </li>
            </ul>
        </div>
    )
}

const style = {
    background: "#031634",
    color: "white"
}