import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Carousel, Radio, Col, Card, Row, Input, Form, Popconfirm, message } from 'antd';
import * as firebase from "firebase/app";


export default function Employees(props) {

  let user = firebase.auth().currentUser
  let [newemail, setEmail] = useState('');
  let [newpassword, setPassword] = useState('');
  let [confirmedP,setConfirmP]= useState('');
  const [error, setError]=useState(false);

  
  
  let credential = firebase.auth.EmailAuthProvider.credential(
    user.email,
    confirmedP
  );


  // Prompt the user to re-provide their sign-in credentials

const submitemail = () => {


      console.log(newemail)
      console.log(user.email)
      console.log(user.password)

      user.reauthenticateWithCredential(credential).then(function () {
        // User re-authenticated.
        user.updateEmail(newemail).then(() => {
          // Update successful.
          console.log('success')
          message.success('CORREO CAMBIADO');
        }, (error) => {
          // An error happened.
          console.log(error)
          var errorMessage = error.message;
          setError(errorMessage)
        });
      }).catch(function (error) {
        // An error happened.
        var errorMessage = error.message;
        setError(errorMessage)
      });
    };
  

  function cancelE(e) {
    console.log(e);
    message.error('NO SE EFECTUO CAMBIOS');
  }

  const submitpassword = () => {

      user.reauthenticateWithCredential(credential).then(function () {
        // User re-authenticated.
        user.updatePassword(newpassword).then(() => {
          // Update successful.
          console.log('success')
          message.success('CONTRASEÑA CAMBIADA');
        }, (error) => {
          // An error happened.
          console.log(error)
          var errorMessage = error.message;
          setError(errorMessage)
        });
      }).catch(function (error) {
        // An error happened.
        var errorMessage = error.message;
        setError(errorMessage)
      });


  };

  const deleteacc = () => {
    user.reauthenticateWithCredential(credential).then(function () {
      // User re-authenticated.
      user.delete().then(function() {
        // User deleted.
      }).catch(function(error) {
        // An error happened.
        var errorMessage = error.message;
        setError(errorMessage)
      });
    }).catch(function (error) {
      // An error happened.
      var errorMessage = error.message;
      setError(errorMessage)
    });

    
  };
   


  function cancelP(e) {
    console.log(e);
    message.error('NO SE EFECTUO CAMBIOS');
  }

  function cancelA(e) {
    console.log(e);
    message.error('NO SE EFECTUO CAMBIOS');
  }


  return (

    <div style={{
      display: 'flex',
      textAlign: 'center' ,
      justifyContent: 'center'
    }}>
      <Row>
        <Col span={24}>
          <label style={{ textAlign: 'center', fontSize: 100, color: 'gold' }}>PERFIL</label>
        <br />
        <Link to="/Home">
          <Button type="primary" shape="round" style={{ backgroundColor: 'royalblue',textAlign: 'center'  }} >INICIO</Button>
        </Link>
       
        <br />
        <br />
      
        <Card type="flex" style={{ width: 300,textAlign: 'center', alignItems:'center',borderColor:"royalblue",color:"gold", borderWidth:5, }}>
        <p>INGRESA TU CONTRASEÑA ACTUAL ANTES DE EFECTUAR ALGUN CAMBIO</p>
        <Input
        placeholder={"contraseña actual"}
        onChange={(e) => setConfirmP(e.target.value)}
        size={"default"}
        style={{ textAlign: 'center' }}/>
        <br />

          <Form.Item
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}>

            <Input
              type="email"
              placeholder={"correo"}
              style={{ textAlign: 'center' }}
              onChange={(e) => setEmail(e.target.value)}
              value={newemail}
              size={"default"}
            />

          <Popconfirm
            title="¿ESTAS SEGURO?"
            onConfirm={submitemail}
            onCancel={cancelE}
            okText="Yes"
            cancelText="No"
          >
            <br />
            <br />
           <Button  type="primary" shape="round" size={"small"} style={{ backgroundColor: 'royalblue' }} >CAMBIAR CORREO</Button>

          </Popconfirm>
          </Form.Item>

          
          <Form.Item
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}>

       <Input
        placeholder={"contraseña actual"}
        style={{ textAlign: 'center' }}
        onChange={(e) => setConfirmP(e.target.value)}
        size={"default"}
        />

          <Input
           placeholder={"nueva contraseña"}
           style={{ textAlign: 'center' }}
           onChange={(e) => setPassword(e.target.value)}
           value={newpassword}
           size={"default"}
           
           />

          <Popconfirm
            title="¿ESTAS SEGURO?"
            onConfirm={submitpassword}
            onCancel={cancelP}
            okText="SI"
            cancelText="NO">
               <br />
            <br />
            <Button type="primary" shape="round" size={"small"} style={{ backgroundColor: 'royalblue' }} >CAMBIAR CONTRASEÑA</Button>
          </Popconfirm>
          </Form.Item>

          <br />
          <Input
        placeholder={"contraseña actual"}
        style={{ textAlign: 'center' }}
        onChange={(e) => setConfirmP(e.target.value)}
        size={"default"}
        
        
        />
          <Popconfirm
            title="¿SEGURO QUE QUIERES BORRAR?"
            onConfirm={deleteacc}
            onCancel={cancelA}
            okText="SI"
            cancelText="NO"
          >
             <br />
            <br />
            <Button type="primary" shape="round" size={"small"} style={{ backgroundColor: 'royalblue' }} >BORRAR CUENTA</Button>
          </Popconfirm>
          <br />

          {
             error !== false ? <h1>{error}</h1> : null
          }

        </Card>
        </Col>
      </Row>
    </div>
  );
};


