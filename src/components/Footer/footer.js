import React from 'react';
import { Container, Row, Carousel } from 'react-bootstrap';
import './footer.css'
import { FaCcMastercard, FaCcPaypal } from "react-icons/fa";
import { RiVisaFill } from "react-icons/ri";
import { BsCashCoin } from "react-icons/bs";
import { SiBitcoincash } from "react-icons/si";
import Marquee from "react-fast-marquee";


export default class Footer extends React.Component {
    render() { 
        return ( 
        <Container className="footer footer2">
            <Container className="footer">
                <Marquee>
                <RiVisaFill className="icon icon-visa"/>
                <FaCcMastercard className="icon icon-visa"/>
                <SiBitcoincash className = "icon icon-visa"/>
                <FaCcPaypal className="icon icon-visa "/>
                <BsCashCoin className="icon icon-visa-2"/>
                </Marquee>
            </Container>
        </Container>
     );
}
}
  