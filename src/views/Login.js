import React,{useEffect,useState} from "react";
import {Link,Redirect} from "react-router-dom";
import * as firebase from 'firebase';
import {Aplicacion} from '../config/firebaseconfig';
import { Button , Form, Input, Card} from 'antd';



export default function Login() {
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const [error, setError]=useState(false);

    const submit =()=>{
      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
       var errorMessage = error.message;
       setError(errorMessage)
       console.log(errorMessage)
       console.log(email)
    });
   
  };
  return (
    <div style={{flexDirection:'column',display:'flex',justifyContent:'center', alignItems:'center', height: '-webkit-fill-available'}}>
            <label className="titles" style={{textAlign:'center', fontSize:250 , color: 'gold' } }>ح</label>
           
            <br/>
            <Form style={{textAlign:'center',flex:'auto'}} >
              <Form.Item
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}>
                
                <Input
                className="inputs"
                placeholder={"correo"}
                
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  size={"default"}
                />

              </Form.Item>
              <Form.Item
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}>

                <Input.Password
                className="inputs"
                 type="password"
                placeholder={"contraseña"}
                style={{textAlign:'center'}}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  size={"default"}
                  
                />
              </Form.Item>
              <br/>
              <br/>
              <Button 
              className="hbuttonss"
              type="primary" shape="round"onClick={submit} style={{backgroundColor:'royalblue'}} >
                ENTRAR
              </Button>
              <br/>
              <br/>
              <Link  to="/FPass">
              <Button 
             className="hbuttonss"
              type="primary" shape="round" style={{backgroundColor:'royalblue'}}>
               ¿OLVIDO LA CONTRASEÑA?
              </Button>
              </Link>
              <br/>
              <br/>
              <Link  to="/Register">
              <Button 
              className="hbuttonss"
              type="primary" shape="round" style={{backgroundColor:'royalblue'}}>
               REGISTRO
              </Button>
              </Link>

              {
             error !== false ? <h1>{error}</h1> : null
              }

              </Form>

    </div>

  );
};
