import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { ImWhatsapp } from "react-icons/im";
import './contact.css'
import Footer from '../Footer/footer'


export default class Contact extends React.Component {
    render() { 
        return ( 
            <Container className="container">
                <br/><br/><br/><br/>
                <h1>CONÓCENOS</h1>
                <p>Único supermercado del país especializado en brindar productos y servicios para la Salud y Bienestar. Encuentra en Farmacia pro medicamentos, equipos médicos, nutrición especial y un sin fin de productos. Visitanos y descubre el maravilloso mundo que tenemos para ti!! </p>
                <Col>
                    <br/>
                        <FaFacebook className="social-media"/>
                        <BsTwitter className="social-media"/>
                        <FiInstagram className="social-media"/>
                        <ImWhatsapp className="social-media"/>
                    </Col>
                    <br/> 
                 <Row>
                    <Col>
                        <img src='https://i.ibb.co/q9vv6hL/fit2.jpg' className="image"></img>
                    </Col>
                    <Col>
                    <iframe className="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7291200.902678494!2d26.38278635464514!3d26.83496813813529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14368976c35c36e9%3A0x2c45a00925c4c444!2sEgipto!5e0!3m2!1ses!2sco!4v1638151797775!5m2!1ses!2sco" ></iframe>
                    </Col>
                </Row>
                <br/><br/>
                <Footer></Footer>
            </Container>
     );
}
}