import React from 'react';
import { Container, Row, Carousel } from 'react-bootstrap';
import Icon from 'react'
import './home.css'
import { Navigation } from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { FaCcMastercard, FaCcPaypal } from "react-icons/fa";
import { RiVisaFill } from "react-icons/ri";
import { BsCashCoin } from "react-icons/bs";
import { SiBitcoincash } from "react-icons/si";
import Marquee from "react-fast-marquee";

export default class Home extends React.Component {
    render() {
        return (
            <Carousel className="img-fluid">
                <Carousel.Item>
                    <img src='https://i.ibb.co/PF3RK9p/Home-Banner.jpg' className='img-fluid' alt='...' />
                    <Carousel.Caption>
                        <h3 className = "banner">EQUIPOS MÉDICOS</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://i.ibb.co/S73PVLZ/fit.jpg' className='img-fluid shadow-4' alt='...' />
                    <Carousel.Caption>
                        <h3 className = "banner">NUTRICIÓN ESPECIALIZADA</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://i.ibb.co/q9vv6hL/fit2.jpg' className='img-fluid shadow-4' alt='...' />
                    <Carousel.Caption>
                        <h3 className = "banner">DERMOCOSMÉTICA</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Container className="footer2">
                    <Marquee>
                        <RiVisaFill className="icon icon-visa" />
                        <FaCcMastercard className="icon icon-visa" />
                        <SiBitcoincash className="icon icon-visa" />
                        <FaCcPaypal className="icon icon-visa " />
                        <BsCashCoin className="icon icon-visa-2" />
                    </Marquee>
                </Container>
            </Carousel>

        );
    }
}
