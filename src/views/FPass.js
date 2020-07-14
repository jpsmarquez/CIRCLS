import React,{useEffect,useState} from "react";
import {Link} from "react-router-dom";
import * as firebase from 'firebase';
import { Button , Form, Input, Card, message} from 'antd';



export default function ResetPassword() {
  const [email, setEmail]=useState('');




  const submit = ()=>{
    console.log(email);
    const auth = firebase.auth();
    auth.sendPasswordResetEmail(email).then(()=> {
    // Email sent.
    message.success("CORREO ENVIADO")
    }).catch((error) => {
     // An error happened.  
    });


  };
  return (
    <div style={{flexDirection:'column',display:'flex',justifyContent:'center', alignItems:'center', height: '-webkit-fill-available'}}>
            <label style={{textAlign:'center', fontSize:60 , color: 'gold'} }>RECUPERA TU CONTRASEÑA </label>
            <br/>
            <Form style={{textAlign:'center'}} >
              <Form.Item
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}>
                
                <Input
                placeholder={"correo"}
                style={{textAlign:'center'}}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  size={"large"}
                  type={'email'}
                />
              </Form.Item>
              <Link to={'/Home'}>
              <Button shape={"round"} type="primary" onClick={submit} style={{backgroundColor:'royalblue'}}>
                ENVIAR
              </Button>
              </Link>
<br/>
<br/>
              <Link to={'/Home'}>
              <Button shape={"round"} type="primary"  style={{backgroundColor:'royalblue'}}>
                INICIO
              </Button>
              </Link>

            </Form>
    </div>

  );
};



