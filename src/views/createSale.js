import React, { useState } from "react";
import { Button, Form, Input, Row, Col, Divider } from 'antd';
import Formasdecampo from '../containers/formasdecampoS';
import { Link } from "react-router-dom";
import Column from "antd/lib/table/Column";
import * as firebase from 'firebase';
import { Aplicacion } from '../config/firebaseconfig';

export default function NewInversion(props) {

  const [titulo, setT] = useState('');

  const [campos, setC] = useState('');



  const llenarcampos = (rstring) => {
    console.log(rstring)

    let c = [...campos]
    let n = campos.length
    c[n] = rstring
    setC(c)

  }

  const [formularios, setFormularios] = useState([<Formasdecampo llenarcampos={llenarcampos} value={campos} />]);

  const submit = () => {
    firebase.database().ref('venta').push({
      titulo: titulo,

      campos: campos


    })
  };

  const addform = () => {
    let f = [...formularios];

    f.push(<Formasdecampo setC={setC} campos={campos} llenarcampos={llenarcampos}  />);

    setFormularios(f)
  };


  const deletelastelement = () => {
    let f = [...formularios];

    f.pop();

    setFormularios(f)
  };

  return (
    <Row>
      <Col span={24}>
        <label className="titles" style={{ textAlign: 'center', fontSize: 100, color: 'gold'  }}>NUEVA VENTA</label>
      
      </Col>
      <Col span={24}>

        <h3 style={{ color: 'gold' }}>El título debe ser unico para cada venta</h3>
      </Col>

      <Col span={24}>
        <Form style={{ textAlign: 'center' }} >
          <Row>
            <Col span={6} >
              <Form.Item
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}>

                <Input
                className="inputs"
                  placeholder={"TITULO"}
                  style={{ textAlign: 'center' }}
                  onChange={(e) => setT(e.target.value)}
                  value={titulo}
                  size={"default"} 
                  
                />
              </Form.Item>
            </Col>

            


            {
              formularios.map((item) => {

                return item;
              })
            }

          </Row>
        </Form>
      </Col>
      <br />
      <br />
      <Col span={24}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-around'
        }}>

          <Link to="/Sales">
            <Button 
            className="cbuttonss"
            type="primary" shape="round" onClick={submit} style={{ backgroundColor: 'royalblue' }}>
              GUARDAR
          </Button>
          </Link>
          <br />
          <Link to="/Home">
            <Button
            className="cbuttonss"
            type="primary" shape="round" style={{ backgroundColor: 'royalblue' }} >
              INICIO
             </Button>
          </Link>
        </div>

      </Col>
    </Row>

  )
}

/*
          <Button type="primary" onClick={addform} style={{ backgroundColor: 'grey' }}>
            +
          </Button>

          <Button type="primary" onClick={deletelastelement} style={{ backgroundColor: 'grey' }}>
            -
          </Button>

          <Button type="primary" shape="round" style={{ backgroundColor: 'grey' }} >
              SUBIR IMAGEN
          </Button>

*/

/*
import React,{useState} from "react";
import { Button , Form, Input, Row, Col, Divider} from 'antd';
import Formasdecampo from '../containers/formasdecampo';
import {Link} from "react-router-dom";
import Column from "antd/lib/table/Column";
import * as firebase from 'firebase';
import {Aplicacion} from '../config/firebaseconfig';

export default function NewInversion(props) {

    const [desc,setD] = useState('');
    const [tipo,setType] = useState('');
    const [titulo,setT] = useState('');

    const [campos,setC] = useState(['']);

    const [index, setIndex] = useState(0);

    const llenarcampos=(rstring)=>{
      console.log(rstring)

      let c = [...campos]
      let n =campos.length
      c[n]=rstring
      setC(c)

    }

    const [formularios,setFormularios] = useState([<Formasdecampo llenarcampos={llenarcampos} value={campos} />]);

    const submit= ()=>{
      firebase.database().ref('inversion').push({
        titulo:titulo,
        tipo:tipo,
        descrip:desc,
        campos:campos


      })
     };

    const addform= ()=>{
        let f = [...formularios];

        f.push(<Formasdecampo setC={setC} campos={campos} llenarcampos={llenarcampos} value={campos[index]}/>);

        setFormularios(f)
    };

    return (
        <Row>
        <Col span={24}>
        <label style={{textAlign:'center', fontSize:100 , color: 'white'} }>NUEVA INVERSION</label>
        </Col>

        <Col span={24}>
        <Form style={{textAlign:'center'}} >
        <Row>
          <Col span={6} >
          <Form.Item
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}>

            <Input
            placeholder={"TITULO"}
            style={{textAlign:'center'}}
              onChange={(e) => setT(e.target.value)}
              value={titulo}
              size={"default"}
            />
          </Form.Item>
          </Col>

          <Col span={6} >
          <Form.Item
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}>
            <Input
            placeholder={"TIPO"}
            style={{textAlign:'center'}}


              onChange={(e) => setType(e.target.value)}

              value={tipo}
              size={"default"}
            />
          </Form.Item>
          </Col>

          <Col span={6} >
          <Form.Item
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}>
            <Input
            placeholder={"DESCRIPCION"}
            style={{textAlign:'center'}}
              onChange={(e) => setD(e.target.value)}
              value={desc}
              size={"default"}
            />
          </Form.Item>
          </Col>

          {
            formularios.map((item)=>{

                return item;
            })
          }

        </Row>
        </Form>
        </Col>

        <Col span={24}>

        <div style={{display:'flex',
        justifyContent: 'space-around'}}>
        <Button type="primary" onClick={addform} style={{backgroundColor:'grey'}}>
            +
          </Button>

        <Link  to="/Inversions">
        <Button type="primary" onClick={submit} style={{backgroundColor:'grey'}}>
            GUARDAR
          </Button>
        </Link>

        <Link  to="/Home">
        <Button type="primary" shape="round" style={{backgroundColor:'grey'}} >
              INICIO
        </Button>
        </Link>
        </div>

        </Col>
        </Row>

    )
}
*/