import React, { Fragment, useState } from 'react';
import './styles.css';
import {Button, Modal} from 'react-bootstrap';

const ComponentRight = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Fragment>
            <div className="ComponentRightContainer">
                <h1 className="hRight">KEWIN <br /> GUZMÁN</h1>
                <p className="pRight">Desarrollador Front-End</p>

                <h1 className="hLeft">HABILIDADES</h1>
                <hr width="19%" size="10" align="left" style={{
                    'background-color': 'gray',
                    'margin': '-10px 0 20px 0'
                }}/>
                <ul>
                    <li> Metodologías agiles – Programación Extrema y Scrum</li>
                    <li> Conocimientos en JavaScript</li>
                    <li> Diseño Base Datos</li>
                    <li>Conocimientos en PHP</li>
                    <li> Desarrollo Web</li>
                    <li> Buenas habilidades escritas, para redactar informes, diagramas e instrucciones</li>
                    <li>  Conocimientos de ofimáticos en: Word, Excel, Power Point, Outlook, OneNote, 
                    Access, Publisher, InfoPath y Skype</li>
                    <Button variant="secondary" onClick={handleShow} style={{'margin-top': '10px'}}>
                        Conocer mas
                    </Button>
                </ul>

                <h1 className="hLeft">LOGROS</h1>
                <hr width="19%" size="10" align="left" style={{
                    'background-color': 'gray',
                    'margin': '-10px 0 20px 0'
                }}/>
                <ul>
                    <li> Aprendizaje de un nuevo lenguaje (Específicamente el portugués).</li>
                    <li> Unificar de forma continua los formatos y métodos de trabajo para optimizar las 
                    labores de distintas áreas para las cuales se realizaron los proyectos en la etapa 
                    lectiva</li>
                    <li> Reparación y recuperación de bases de datos estándares en muy poco tiempo para 
                    el colegio en el cual está realizando con mi compañero el proyecto de software
                    (mientras realizaba mi formación técnica).</li>
                    <li> Obtener el reconocimiento por tener el mejor levantamiento de información a 
                    comparación con los de los demás equipos de la ficha (dada en mi formación 
                    tecnóloga).</li>
                </ul>

                <h1 className="hLeft">EDUCACION</h1>
                <hr width="19%" size="10" align="left" style={{
                    'background-color': 'gray',
                    'margin': '-10px 0 20px 0'
                }}/>
                <h3>COLEGIO ALDEMAR ROJAS PLAZAS (CONVENIO SENA)</h3>
                <p>Bachiller Técnico en Programación de Software 2020</p>
                <p>Grado 10° (2019) – Grado 11° (2020)</p>
                <p>(Bogotá D.C.)</p>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Conocimientos</Modal.Title>
                </Modal.Header>
                <Modal.Body><ul>
                    <li>Conocimientos en JavaScript en un 50%</li>
                    <li>Conocimientos en Visual Basic en un 65%</li>
                    <li>Conocimientos en Php en un 45%</li>
                    <li>Conocimientos en Java en un 70%</li>
                    <li>Conocimientos en C# en un 80%</li>
                </ul></Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}

export default ComponentRight;
