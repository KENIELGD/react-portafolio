import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import intro from '../../images/intro-bg.jpg'

const Div=styled.div`
    background: #151515 url(${intro}) no-repeat center bottom;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    background-attachment: fixed;
    width: 99.1%;
    height: 100%;
    min-height: 696px;
    display: table;
    position: relative;
    text-align: center;

    .intro-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #111111;
        opacity: .75;
    }

    .intro-content {
        display: table-cell;
        vertical-align: middle;
        text-align: center;
        -webkit-transform: translateY(-2.1rem);
        -ms-transform: translateY(-2.1rem);
        transform: translateY(-2.1rem);
    }
    .intro-content .h1 {
        color: #FFFFFF;
        font-family: "poppins-medium", sans-serif;
        font-size: 6.4rem;
        line-height: 1.071;
        max-width: 900px;
        margin-top: 0;
        margin-bottom: .6rem;
        margin-left: auto;
        margin-right: auto;
        text-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    }
    .intro-content .h5 {
        color: #cc005f;
        font-family: "poppins-bold", sans-serif;
        font-size: 2.3rem;
        line-height: 1.565;
        margin-bottom: 0;
        text-transform: uppercase;
        letter-spacing: .3rem;
        text-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
    }
    .intro-content .intro-position {
        font-family: "lora-regular", serif;
        font-size: 1.2rem;
        line-height: 2.4rem;
        text-transform: uppercase;
        letter-spacing: .2rem;
        color: #FFFFFF;
        margin-left:400px;
        text-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
    }
    .intro-content .intro-position span {
        display: inline-block;
    }
    .intro-content .intro-position span::after {
        content: "|";
        text-align: center;
        display: inline-block;
        padding: 0 8px 0 14px;
        color: rgba(255, 255, 255, 0.3);
    }
    .intro-content .intro-position span:first-child::before {
        content: "|";
        text-align: center;
        display: inline-block;
        padding: 0 14px 0 8px;
        color: rgba(255, 255, 255, 0.3);
    }
    .intro-content .button {
        text-decoration:none;
        color: #FFFFFF;
        border-color: rgba(255, 255, 255, 0.3);
        height: 6rem !important;
        line-height: 5.4rem !important;
        padding: 1rem 3.5rem 1rem 3rem !important;
        margin-top: .6rem;
        font-size: 1.3rem;
        text-transform: uppercase;
        letter-spacing: .25rem;
        border: 1px solid #fff;

        &:hover{
            background-color:#fff;
            color: #000;
        }
    }
`;

const Page = () => {
    return (

        <Div>   

            <div className="intro-overlay"></div>	

            <div className="intro-content">
                <div className="row">

                    <div className="col-twelve">

                        <h5 className="h5">Bienvenidos</h5>
                        <h1 className="h1">Yo soy Kewin Guzmán</h1>

                        <p className="intro-position">
                            <span>Front-end Developer</span>
                            <span>UI/UX Designer</span> 
                        </p>

                        <Link to='/Portafolio' className="button">Ver Portafolio</Link>

                    </div>  
                    
                </div>   		 		
            </div>
        </Div>
    )
}

export default Page
