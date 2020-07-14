import React, { useState, useEffect } from "react";
import { Link, withRouter} from "react-router-dom";
import { Button, Col, Card, Row, Popconfirm, message,Input } from 'antd';
import * as firebase from "firebase/app";

export default withRouter( function Nota(props) {

  console.log(props)
  var ref = firebase.database().ref(`/notas/${props.match.params.id}`);
  console.log(ref)

  const [arrayofdb, setArrayofdb] = useState({})

  const [ntitulo, setnT] = useState('');
  const [nti, seTi] = useState('');

  useEffect(() => {
    ref.once("value", (snapshot) => {
      console.log(snapshot.val())
      const childData = snapshot.val();
      setArrayofdb(childData)
      console.log(childData)
    });
}, []);

const updateT =()=> {
    firebase.database().ref(`/notas/${props.match.params.id}/titulo`).set(ntitulo)
    message.success('TITULO MODIFICADO');
  };

  function cancelT(e) {
    console.log(e);
    message.error('NO SE EFECTUO CAMBIOS');
  }


  function cancelc(e) {
    console.log(e);
    message.error('NO SE EFECTUO CAMBIOS');
  }

  const updateC = () => {
    firebase.database().ref(`/notas/${props.match.params.id}/info`).set(arrayofdb.info)
    message.success('CAMPO EDITADO');
  };


  function updateinput(e){
    setArrayofdb(
      {...arrayofdb,
         info: e.target.value
      })
  }

  const deleteI =()=> {
    ref.remove();
    message.success('INVERSION ELIMINADA');
    props.history.push('/Notas')
  };


  function cancelD(e) {
    console.log(e);
    message.error('NO SE EFECTUO CAMBIOS');
  }


  return (

    <div style={{

      display: 'flex',
      textAlign: 'center' ,
      justifyContent: 'center',
      
    }}>
      <Row >
        <Col span={24}>
          <label className="titles" style={{ textAlign: 'center', fontSize: 100, color: 'gold' }}>{arrayofdb.titulo}</label>

        <br />

        <Link to="/Home">
          <Button type="primary" size={"small"}  shape="round" style={{ backgroundColor: 'royalblue' }} >
            INICIO
        </Button>
        </Link>
        
        <br />
        <br />

        <Link to="/Notas">
          <Button type="primary" size={"small"}  shape="round" style={{ backgroundColor: 'royalblue' }} >
            NOTAS
        </Button>
        </Link>
        <br />
        <br />
          <Input
                  placeholder={`${arrayofdb.titulo} `}
                  style={{ textAlign: 'center' }}
                  onChange={(e) => setnT(e.target.value)}
                  value={ntitulo}
                  size={"default"}
          />
          <br />
          <br />
          <Popconfirm
            title="¿ESTAS SEGURO?"
            onConfirm={updateT}
            onCancel={cancelT}
            okText="SI"
            cancelText="NO">
             <Button type="primary" shape="round" size={"small"} style={{ backgroundColor: 'royalblue' }} >EDITAR TITULO</Button>
          </Popconfirm>
          
          <br />
          <br />
          
          <Input.TextArea
                  style={{textAlign: 'center' }}
                  value={`${arrayofdb.info}`}
                  onChange={(e) => updateinput(e)}
                  autoSize true 
          />
          <br/>
          <br/>
          <Popconfirm
            title="¿ESTAS SEGURO?"
            onConfirm={updateC}
            onCancel={cancelc}
            okText="SI"
            cancelText="NO">
            <Button type="primary" shape="round" size={"small"}  style={{ backgroundColor: 'royalblue' }}>EDITAR NOTA</Button>
          </Popconfirm>

          <br/>
          <br/>
          <Popconfirm
            title="¿ESTAS SEGURO?"
            onConfirm={deleteI}
            onCancel={cancelD}
            okText="SI"
            cancelText="NO">
            <Button type="primary" shape="round" size={"small"} style={{ backgroundColor: 'royalblue' }} >BORRAR </Button>
          </Popconfirm>
          <br/>
          <br/>
        </Col>
      </Row>
    </div>
  );
});

/*
  const submit = (campo2e) => {
    firebase.database().ref(`/inversion/${props.match.params.id}/campos`).update({
     campos:campos
   })
  };


            {
              formularios.map((item) => {

                return item;

              })
          }
          <br/>
          <Button type="primary" size={"small"} onClick={submit} style={{ backgroundColor: 'grey' }}>
              GUARDAR CAMPO/CAMPOS
          </Button>
          <br/>


                    {
            arrayofdb.campos ? (
              arrayofdb.campos.map((item, index) => {
              
                return(
                  <Input
                  placeholder={`EDITAR CAMPO ${item}`}
                  style={{ textAlign: 'center' }}
                  onChange={(e) => setnD(e.target.value)}
                  value={campo2e}
                  size={"default"}
                  />
                )

              }))
              : null
          }


  const llenarcampos = (rstring) => {
    console.log(rstring)

    let c = [...campos]
    console.log([campos])
    let n = campos.length

    c[n] = rstring
    console.log(c)
    setC(c)

  }


    const addform = () => {
    let f = [...formularios];
    f.push(<Formasdecampo setC={setC} campos={campos} llenarcampos={llenarcampos} value={campos[index]} />);
    setFormularios(f)
  };


      firebase.database().ref(`/inversion/${props.match.params.id}/campos`).update({
     campos
   })



            

          {
            arrayofdb.campos ? (
              arrayofdb.campos.map((item, index) => {
              
                return(
                  <p>{
                    item
                  }</p>
                )

              }))
              : null
          }
*/