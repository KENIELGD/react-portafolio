import React, {Fragment} from 'react';
import './styles.css';
import Kewin from '../../images/FOTO_KEWINGUZMAN.jpg';

const ComponentLeft = () => {
    return (
        <Fragment>
        <div className="ComponentLeftContainer">
            <img src={Kewin} alt="" className="ComponentLeftImg" />

            <h1 className="hLeft">PERFIL</h1>
            <hr width="19%" size="10" align="left" style={{
                'background-color': 'gray',
                'margin': '-10px 0 20px 0'
            }}/>
            <p>Tecnólogo en formación del programa ADSI (Análisis y Desarrollo de Sistemas de 
            Información) del SENA, muy responsable, creativo, con sentido de pertenencia hacia mi 
            trabajo, con gran capacidad de aprendizaje y adaptación, disponibilidad para realizar 
            labores asignadas, con capacidad para la optimización de procesos y labores, familiarizado 
            con la resolución de problemas, capacidad para liderar y trabajar en equipo, absoluta 
            responsabilidad sobre los asuntos de carácter confidencial, con completa disposición para 
            aprender y aportar mis conocimientos, ideas y experiencia para la mejora continua en la 
            empresa.</p>

            <p>Actualmente en busca de una oportunidad para capacitarme, desarrollar y completar mi
            práctica, y así, poder crecer profesionalmente.</p>

            <p><strong>Hobbies:</strong> Meditar, Leer, Escribir, Baloncesto, Ajedrez, Aprender Idiomas.</p>

            <h1 className="hLeft">CONTACTO</h1>
            <hr width="19%" size="10" align="left" style={{
                'background-color': 'gray',
                'margin': '-10px 0 20px 0'
            }}/>
            <ul className="ulLeft">
                <li><i class='bx bxs-comment-add'></i> Carrera 5 # 8-26 - Mosquera, Cundinamarca</li>
                <li><i class='bx bx-mail-send'></i> kdguzman98@gmail.com</li>
                <li><i class='bx bx-phone'></i> +57 3024153384</li>
                <li><i class='bx bxl-linkedin-square'></i> /Kenielgd</li>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </ul>
        </div>
    </Fragment>
    )
}

export default ComponentLeft;
