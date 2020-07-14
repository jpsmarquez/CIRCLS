import React,{useEffect,useState} from "react";
import {Link,Redirect} from "react-router-dom";
import * as firebase from 'firebase';
import {Aplicacion} from '../config/firebaseconfig';
import { Button , Form, Input, Card} from 'antd';


export default function Login() {
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const [tipo,setType] = useState('');
  const [nombre,setN] = useState('');
  const [error, setError]=useState('');
  const [UsuarioCreado,setUsuarioCreado]=useState('');



  const submit =()=>{
    

    firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
      // Update successful.
      console.log('success')

      setUsuarioCreado("USUARIO CREADO")
      console.log(UsuarioCreado)
      
       }, (error) => {
        var errorMessage = error.message;
        setError(errorMessage);
      // An error happened.
      console.log(error)
      }).catch(function(error) {
 
      
     })
//add to firebase db with  email and passwords requirements
     
    
  };
  return (
    <div style={{flexDirection:'column',display:'flex',justifyContent:'center', alignItems:'center', height: '-webkit-fill-available'}}>
            <label style={{textAlign:'center', fontSize:150 , color: 'white'} }>REGhISTRO </label>
            <br/>
            <Form style={{textAlign:'center',flex:'auto'}} >
              <Form.Item
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}>

                <Input type={'email'}
                placeholder={"correo"}
                style={{textAlign:'center'}}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  size={"default"}
                />
              </Form.Item>

              <Form.Item
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}>
                <Input 
                placeholder={"contraseña"}
                style={{textAlign:'center'}}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  size={"default"} />
              </Form.Item>


              <Button type="primary" onClick={submit} style={{backgroundColor:'royalblue'}} >
                REGISTRO
              </Button>
              
              {
              UsuarioCreado ? <h1>{UsuarioCreado} </h1> : <h1>{error} </h1>
              }
              
              

             
              <Link  to="/Home">
             <Button type="primary" shape="rectangle" style={{backgroundColor:'grey'}} >
              INICIO
             </Button>
              </Link>
              </Form>

    </div>

  );
};

