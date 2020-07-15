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
                        <Col span={30}>

                              <br />
                              <br />
                              <br />
                              <br />

                              <Link to="/NewSale">
                                    <Button className="buttonss" type="primary" shape="round" style={{ width: 500, height: 80, backgroundColor: 'royalblue', fontSize: 45 }}>
                                          NUEVA VENTA
                                            </Button>
                              </Link>
                              <br />
                              <br />
                              <br />
                              <Link to="/NewInversion">
                                    <Button className="buttonss" type="primary" shape="round" style={{ width: 500, height: 80, backgroundColor: 'royalblue', fontSize: 45 }}>
                                          NUEVA COMPRA
                                   </Button>
                              </Link>


                              <br />
                              <br />
                              <br />
                              <Link to="/Employees">
                                    <Button className="buttonss" type="primary" shape="round" style={{ width: 500, height: 80, backgroundColor: 'royalblue', fontSize: 45, }}  >
                                          CREAR EMPLEADO
                        </Button>
                              </Link>

                              <br />
                              <br />
                              <br />


                       

                              <Link to="/Notas">
                                    <Button className="buttonss" type="primary" shape="round" style={{ width: 500, height: 80, backgroundColor: 'royalblue', fontSize: 45, }}  >
                                          NOTAS
                                     </Button>
                              </Link>
                           
                              <br />
                              <br />
                              <br />




                        </Col>
                  </Row>




                  <Row>

                        <Col span={30}>

                              <br />
                              <br />
                              <br />
                              <br />
                              <Link to="/Sales">
                                    <Button className="buttonss" type="primary" shape="round" style={{ width: 500, height: 80, backgroundColor: 'royalblue', fontSize: 45 }} >
                                          VENTAS
                                            </Button>
                              </Link>



                              <br />
                              <br />
                              <br />



                              <Link to="/Inversions">
                                    <Button className="buttonss" type="primary" shape="round" style={{ width: 500, height: 80, backgroundColor: 'royalblue', fontSize: 45 }} >
                                          COMPRAS
                    </Button>
                              </Link>

                              <br />
                              <br />
                              <br />

                              <Link to="/Profile">
                                    <Button className="buttonss" type="primary" shape="round" style={{ width: 500, height: 80, backgroundColor: 'royalblue', fontSize: 45 }} >
                                          PERFIL
                        </Button>

                              </Link>
                          

           
                              <br />
                              <br />
                              <br />
                   <Button className="buttonss" onClick={props.logout} size='100px' type="primary" shape="round" style={{ width: 500, height: 80, backgroundColor: 'royalblue', fontSize: 45, justifyContent:'center',display:'center' }}>
                                    SALIR
                   </Button>

                        </Col>

                  </Row>


            </div>





      );

};
