import React, { useState, useEffect } from "react";
import { Button, Form, Input, Row, Col, Divider, Card, message, Popconfirm } from 'antd';
import Formasdecampo from '../containers/formasdecampo';
import { Link } from "react-router-dom";
import Column from "antd/lib/table/Column";
import * as firebase from 'firebase';
import { Aplicacion } from '../config/firebaseconfig';

export default function NewNte(props) {

    let ref = firebase.database().ref("/notas");
    const [variable, setVariable] = useState(false)
    const [nota, setN] = useState('');
    const [tit, setT] = useState('');
    const [index, setIndex] = useState(0);
    const [arrayofdb, setArrayofdb] = useState([])
    let [searched, setSearched] = useState('');
    const [st, setSt] = useState('');

    useEffect(() => {
        if (!variable) {

            ref.once("value", (snapshot) => {

                console.log(snapshot)

                snapshot.forEach((childSnapshot) => {

                    console.log(childSnapshot.key)

                    const childData = childSnapshot.val();

                    console.log(childData)

                    const n = childData.info;
                    const t = childData.titulo
                    const id = childSnapshot.key

                    arrayofdb.push({
                        titulo: t,
                        info: n,
                        id: id
                    })
                });
                setVariable(true)
            });
        }
    }, [])

    function refreshPage() {
        window.location.reload(true);
    }

    const submit = () => {
        firebase.database().ref('notas').push({
            titulo: tit,
            info: nota
        })
        message.success('NOTA CREADA');

        refreshPage()

    };

    const ssearched = () => {
        arrayofdb.map((item, index) => {
            if (searched === item.titulo.toLowerCase() && searched !== -1) {
                console.log(item.titulo)
                console.log(item.info)

                const arraydbaux = arrayofdb;
                arraydbaux.splice({})

                arraydbaux.push({
                    titulo: item.titulo,
                    info: item.info
                })
                
                setArrayofdb(arraydbaux)
            }
        })
        setSearched('')
    };

    return (
        <div style={{
            textAlign: 'center' ,
            justifyContent: 'center'
          }}>
        <Row>
            <Col span={24}>
                <label style={{ textAlign: 'center', fontSize: 100, color: 'gold' }}>NOTAS</label>
            </Col>
            <Col span={24}>
                <Form style={{ textAlign: 'center' }} >
                    <Row>

                        <Col span={24} style={{ marginVertical: 20 }}>
                            <Input.TextArea
                                style={{ textAlign: 'center', width: 300, height: 100 }}
                                onChange={(e) => setT(e.target.value)}
                                autoSize true
                                placeholder={`TITULO `}
                            />
                        </Col>
                        <br />
                        <br />
                        <Col span={24} style={{ marginVertical: 20 }}>
                            <Input.TextArea
                                style={{ textAlign: 'center', width: 300, height: 500 }}
                                onChange={(e) => setN(e.target.value)}
                                autoSize true
                                placeholder={` NOTA `}
                            />
                        </Col>
                    </Row>
                </Form>
                <br />

            </Col>
           

            <Col span={24}>
                <div style={{
                    textAlign: 'center',
                    justifyContent: 'center'
                }}>

                    <Button type="primary" shape="round" onClick={submit} style={{ backgroundColor: 'royalblue' }}>
                        GUARDAR
                   </Button>
                    <br />
                    <br />

                    <Input
                        id="Buscar"
                        size={"medium"}
                        style={{ textAlign: 'center', width: 300 }}
                        placeholder="BUSCA POR TITULO"
                        onChange={(e) => setSearched(e.target.value.toLowerCase())}
                        value={searched}
                        autoComplete={"off"}
                    />

                    <Col span={24}>
                        <Button onClick={ssearched} type="primary" shape="round" style={{ backgroundColor: 'royalblue' }} >
                            BUSCAR
                    </Button>
                    </Col>
                    <br />


                    <Col span={24}>
                        <Button onClick={refreshPage} type="primary" shape="round" style={{ backgroundColor: 'royalblue'}} >
                            NUEVA BUSQUEDA
                      </Button>
                    </Col>

                    <br />
                    <Link to="/Home">
                        <Button type="primary" shape="round" style={{ backgroundColor: 'royalblue' }} >
                            INICIO
                    </Button>
                    </Link>

                    <br />
                    <br />

                    {
                        arrayofdb.map((item, index) => {
                            return (
                                <Row   >
                                    <Col   >
                                        <Card shape="round" className="invscampos" autoSize true style={{ alignItems: 'center', backgroundColor:'rgb(101, 108, 146)', color:"gold", width:1440 }} key={index} >
                                            {item.titulo}
                                            <br />
                                            <Link to={{ pathname: `/Nota/${item.id}` }}>
                                                <br />
                                                <Button type="primary" size='small' shape="round" style={{ backgroundColor: 'royalblue', textAlign: 'center' }} >
                                                    INSPECCIONAR
                                              </Button>
                                            </Link>
                                        </Card>
                                    </Col>
                                </Row>
                            )
                        })
                    }

                </div>
            </Col>
        </Row>
    </div>
    )
}