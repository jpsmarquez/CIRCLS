import React from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col, Card } from 'antd';
import '../App.css';

export default function HomeAdmin(props) {
    return (
        <div
            style={{
                display: 'flex',
                textAlign: 'center',
                justifyContent: 'space-around'
            }}>


            <Row>

                <Col span={24}>

                    <br />
                    <br />
                    <br />
               

                    <Card type="flex" style={{ width: 300, textAlign: 'center', alignItems: 'center', borderColor: "royalblue", backgroundColor: 'steelblue', color: "gold", borderWidth: 5, }}>
                        <p>PARA CREAR UN REGISTRO DE VENTA, HAGA CLICK EN EL BOTON DEL MENU PRINCIPAL NUEVA VENTA, DESPUES DE LLENAR LOS</p>
                        <p>INGRESA TU CONTRASEÑA ACTUAL ANTES DE EFECTUAR ALGUN CAMBIO</p>
                        <p>INGRESA TU CONTRASEÑA ACTUAL ANTES DE EFECTUAR ALGUN CAMBIO</p>
                        <p>INGRESA TU CONTRASEÑA ACTUAL ANTES DE EFECTUAR ALGUN CAMBIO</p>
                        <p>INGRESA TU CONTRASEÑA ACTUAL ANTES DE EFECTUAR ALGUN CAMBIO</p>
                        <Link to="/">
                        <Button className="buttonss" size='100px' type="primary" shape="round" style={{ width: 100, height: 60, backgroundColor: 'royalblue', fontSize: 25 }}>
                            INICIO
                              </Button>
                    </Link>

                    </Card>

                    <br />
                    <br />
                    <br />

                </Col>

            </Row>


        </div>





    );

};
