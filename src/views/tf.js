import React, { useState } from "react";
import { Button, Form, Input, Row, Col, Divider, Card, message } from 'antd';
import Formasdecampo from '../containers/formasdecampoI';
import { Link, render } from "react-router-dom";
import * as firebase from 'firebase';
import { Aplicacion } from '../config/firebaseconfig';
import { storage } from  '../config/firebaseconfig';

export default function NewF(props) {


  const [img, setI] = useState('');
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");

  const [progress, setProgress] = useState(0);



  const handleChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };




  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);

      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            setUrl(url);
            console.log(url)
          });
      }
    );
  };




  console.log("image: ", image);



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

                <input className="i_input" type="file" onChange={handleChange} style={{ width: 300, height: 50 }}   /> 

                <br />
                <br />
                <br />
                <progress value={progress} max="100" />
                <br />
                <br />
                <br />
       
                <Button
            type="primary" shape="round" onClick={handleUpload} style={{ backgroundColor: 'royalblue' }}>
            SUBIR IMAGEN
          </Button>

                <br />
                <br />
                <br />


                <Link to="/Home">
            <Button
              type="primary" shape="round" style={{ backgroundColor: 'royalblue' }} >
              INICIO
            </Button>
          </Link>

                <br />
                <br />
                <br />

                <Link to="/Fotos">
            <Button
              type="primary" shape="round" style={{ backgroundColor: 'royalblue' }} >
              FOTOS
            </Button>
          </Link>
          <br />
                <br />
                <br />


                <div style={{
          display: 'flex',
          justifyContent: 'space-around'
       }}>

          <img src={url}   />

          </div>



          </Col>
    </Row>



</div>

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