import React from 'react';
import { Container, Row, Carousel } from 'react-bootstrap';
import './products.css'
import Footer from '../Footer/footer'
export default class Products extends React.Component {
    render() { 
        return ( 
            <Container>
            <br/><br/><br/><br/>
            <img src="https://i.ibb.co/P1kQBpz/depositphotos-6786480-stock-photo-happy-elderly-couple.jpg" class="viejitos"></img>
            <br/><br/>
            <h1>NUESTROS PRODUCTOS</h1>
            <div class="container">
            <div class="plan">
                <h3 class="plan-title">CETAPHIL EMULSIÓN HIDRATANTE</h3>
                <img src="https://i.ibb.co/235psHJ/cetaphil-locion-ultra-humectante.png" class="img"></img>
                <ul class="plan-features">
                  <li class="plan-feature"> <span class="plan-feature-name prom">Antes:$78.250</span></li>
                  <li class="plan-feature"> <span class="plan-feature-name prom2">Ahora:46.950</span></li>
                </ul>
                <p class="plan-price"><span class="plan-unit">*Precios sujetos a cambio*</span></p>
                <a href="#" class="plan-button">Comprar</a>
            </div>
            <div class="plan">
                <h3 class="plan-title">VICHY NORMADERM PHYTOSOLUTION</h3><br/>
                <img src="https://i.ibb.co/xCpzmfN/3337875660617-1.webp" class="img"></img>
                <ul class="plan-features">
                  <li class="plan-feature"> <span class="plan-feature-name prom">Antes: $110.600</span></li>
                  <li class="plan-feature"> <span class="plan-feature-name prom2">Ahora: $102.500</span></li>
                </ul>
                <p class="plan-price"><span class="plan-unit">*Precios sujetos a cambio*</span></p>
                <a href="#" class="plan-button">Comprar</a>
            </div>
            <div class="plan">
                <h3 class="plan-title">TENSIOMETRO DIGITAL AUTOMÁTICO</h3>
                <img src="https://i.ibb.co/cb2sMrV/tensiometro-digital-brazo-automatico-tension-arterial.webp" class="img"></img>
                <ul class="plan-features">
                  <li class="plan-feature"> <span class="plan-feature-name prom">Antes: 87.900</span></li>
                  <li class="plan-feature"> <span class="plan-feature-name prom2">Ahora: 76.890</span></li>
                </ul>
                <p class="plan-price"><span class="plan-unit">*Precios sujetos a cambio*</span></p>
                <a href="#" class="plan-button">Comprar</a>
            </div>
        </div>
        <div class="container">
                <br/><br/><br/>
            <div class="plan">
                <h3 class="plan-title">CETAPHIL EMULSIÓN HIDRATANTE</h3>
                <img src="https://i.ibb.co/yp0CFKr/7702132001001.webp" class="img"></img>
                <ul class="plan-features">
                  <li class="plan-feature"> <span class="plan-feature-name prom">Antes: 56.780</span></li>
                  <li class="plan-feature"> <span class="plan-feature-name prom2">Ahora: 53.450</span></li>
                </ul>
                <p class="plan-price"><span class="plan-unit">*Precios sujetos a cambio*</span></p>
                <a href="#" class="plan-button">Comprar</a>
            </div>
            <div class="plan">
                <h3 class="plan-title">ENSURE ADVANCE</h3><br/><br/>
                <img src="https://i.ibb.co/QjgrjQF/FARMACLUB-MEDICAMENTO-Y-PRODUCTOS-ENSURE-ADVANCE-X-850-GR.webp" class="img"></img>
                <ul class="plan-features">
                  <li class="plan-feature"> <span class="plan-feature-name prom">Antes: 98.700</span></li>
                  <li class="plan-feature"> <span class="plan-feature-name prom2">Ahora:86.990</span></li>
                </ul>
                <p class="plan-price"><span class="plan-unit">*Precios sujetos a cambio*</span></p>
                <a href="#" class="plan-button">Comprar</a>
            </div>
            <div class="plan">
                <h3 class="plan-title">TENSIOMETRO DIGITAL AUTOMÁTICO</h3>
                <img src="https://i.ibb.co/PTwSG66/81-Olb8jbfm-L-SL1500.jpg" class="img"></img>
                <ul class="plan-features">
                  <li class="plan-feature"> <span class="plan-feature-name prom">Antes: 34.560</span></li>
                  <li class="plan-feature"> <span class="plan-feature-name prom2">Ahora: 30.150</span></li>
                </ul>
                <p class="plan-price"><span class="plan-unit">*Precios sujetos a cambio*</span></p>
                <a href="#" class="plan-button">Comprar</a>
            </div>
        </div>
        <Footer></Footer>
        </Container>
     );
}
}