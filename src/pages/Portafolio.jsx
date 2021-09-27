import React from 'react'
import ComponentLeft from '../components/Portafolio/ComponentLeft'
import ComponentRight from '../components/Portafolio/ComponentRight';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';


const Section=styled.section`
    background-color: #ccc;
    border-left: 250px solid #000;
    border-right: 250px solid #000;
    position: absolute;

    .box{
        color:#fff;
        margin: 10px 0 0 10px;
    }
`;

const Portafolio = () => {
    return (
        <Section>
            <Link to='/'><i className='box bx bx-left-arrow-alt bx-lg'></i></Link>
            <ComponentLeft />
            <ComponentRight />
        </Section>
    )
}

export default Portafolio
