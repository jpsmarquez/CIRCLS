import React,{useState} from "react";
import { Form, Input,Col, Row, } from 'antd';



export default function FormasDeCampo({llenarcampos}) {
    const { TextArea } = Input;
    
    return (
       <Col span={6} style={{marginVertical:10}}>

        <TextArea 
        className="inputs"
        style={{height:'fit-content'}} 
        rows={4}
        onChange={(e) => 
        llenarcampos(e.target.value)} 
        placeholder={"INFO"} 
        autoSize true
        />
        
        </Col>
    )
}


