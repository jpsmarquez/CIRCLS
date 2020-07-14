import React, { useState } from "react";
import { Button, Form, Input, Row, Col, Divider, Card, message } from 'antd';
import { Link, render } from "react-router-dom";
import * as firebase from 'firebase';
import { Aplicacion } from '../config/firebaseconfig';
import { storage } from  '../config/firebaseconfig';


export default function NewF(props) {

  const [img, setI] = useState('');
  const [urll, setUrl] = useState("");
  var storage = firebase.storage();
  var storageRef = storage.ref();

  storageRef.child('images').listAll().then(function(result){

    result.items.forEach((imgRef) => {
        //console.log(imgRef.toString());
       imgRef.getDownloadURL().then(function(url){
        
   

       setUrl(url)
   

    })
        
    })
}).catch(function(error){

});






// script.js



  return (
      
    <Row>
      <Col span={24}>
      <br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
        <div style={{
          display: 'flex',
          justifyContent: 'space-around'
         }}>







  


        </div>
      </Col>
    </Row>

  )
}

/*


 <div style={{

      textAlign: 'center' ,
      justifyContent: 'center'
    }}>
      <Row>
        <Col span={24}>
          <label className="titles" style={{ textAlign: 'center', fontSize: 100, color: 'grey' }}>INVERSIONES</label>
        </Col>
        <Col span={24}>
          <Link to="/Home">
            <Button type="primary" shape="round" style={{ backgroundColor: 'grey' }} >
              INICIO
              </Button>
          </Link>
        </Col>
        <br />
        <br />
        <Col span={24}>
          <Link to="/NewInversion">
            <Button type="primary" shape="round" style={{ backgroundColor: 'grey' }} >
              NUEVA INVERSION</Button>
          </Link>
        </Col>
        <Col span={24}>
          <br />
          <Input
            id="Buscar"
            size={"large"}
            style={{ textAlign: 'center', width:300 }}
            placeholder="BUSCAR"
            onChange={(e) => setSearched(e.target.value.toLowerCase())}
            value={searched}
            autoComplete={"off"}
          />
          <h5 style={{ color: 'grey' }}>SI NO EXISTE REGISTRO DE SU BUSQUEDA, </h5>
          <h5 style={{ color: 'grey' }}>ESTA MAL ESCRITA O </h5>
          <h5 style={{ color: 'grey' }}>HAY INVERSIONES CON EL MISMO TITULO.  </h5>
          <h5 style={{ color: 'grey' }}>PARA BUSCAR OTRO ATRIBUTO SELECCIONE</h5>
          <h5 style={{ color: 'grey' }}>CONTROL F o COMMAND F </h5>

          <Button onClick={ssearched} type="primary" shape="round" style={{ backgroundColor: 'grey' }} >
            BUSCAR
          </Button>
          <br />
          <br />
          <Col span={24}>
            <Button onClick={refreshPage} type="primary" shape="round" style={{ backgroundColor: 'grey' }} >
              NUEVA BUSQUEDA
            </Button>
          </Col>
          <br />

        </Col>

        {
          arrayofdb.map((item, index) => {
            return (
              <Row   >
              <Col   >
              <Card  shape="round" className="invscampos" autoSize true style={{ alignItems:'center', }} key={index} >
                {item.titulo}
                <br />
                {item.tipo}
                <br />
                {item.desc}
                <br />
                <Link to={{ pathname: `/Inversion/${item.id}` }}>
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

      </Row>
    </div>





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