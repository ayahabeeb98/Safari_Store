import React from "react";
import SignUp from "../../components/signUp";
import LogIn from '../../components/signIn'
import { Row, Col } from "antd";
import 'antd/dist/antd.less';

function Registration() {
  return (
    <div className="registration">
       <Row justify="space-around">
           <Col span={8}>
            <h1>Hello there!</h1>
          <p>Please sign in or create account to continue</p>
          {/* <Sign-in/> */}
           </Col>
           <Col span={8}></Col>
       </Row>
      <Row justify="space-around">
        <Col span={8}>
         
              <LogIn/>
        </Col>  
        <Col span={8} >
          <SignUp />
        </Col>
      </Row>
    </div>
  );
}

export default Registration;
