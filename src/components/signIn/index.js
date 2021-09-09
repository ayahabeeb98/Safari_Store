import { Form, Input, Button, Checkbox } from "antd";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// import { AuthContext } from '../../App'
import firebase from 'firebase'
import './style.less'
//  export const AuthContext = React.createContext();
// import {useForm} from './useForm'

const LogIn = () =>
{
    //  const Auth = useContext(AuthContext);
    // const [values,handleChange]= useForm({email:" ",password:" ",checkbox:" "})
      const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
      const [checked, setChecked] = useState(false);
  const [error, setErrors] = useState("")
  // const [isLoggedIn, setLoggedIn] = useState(false);
  const history = useHistory();
    const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleForm = e => {

    e.preventDefault();
    console.log("emanaa")
    firebase
    .auth()
    .signInWithEmailAndPassword(email,password)
      .then(res =>
      {
      console.log("hello ")
      console.log(res,"hi")
      
        if (res.user)
        {
          // Auth.setLoggedIn(true)
          history.push("/");
        };
      
    })
    .catch(e => {
      setErrors(e.message);
    });
  };
    return (
      <div className="login login-form">
         <h2 className="title--form">Sign In </h2>
        <Form
          onSubmit={e => handleForm(e)}
        name="basic"
        labelCol={{
          span:8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
          className="login__form"
                onFinish={onFinish}
      onFinishFailed={onFinishFailed}

            >
                
 <Form.Item
          name="Email"
                rules={[{ required: true, message: 'Please input your Email!' }]}

          className="login__formItem"
        >
          <label>Email</label>
            <Input
              name ="email"
            type="email"
            onChange={(event) => setEmail(event.target.value)}
              value = {email}
          />
                </Form.Item>
                <Form.Item
               rules={[{ required: true, message: 'Please input your password!' }]}

          className="login__formItem"
        >
          <label> Password</label>
            <Input
              name="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
                </Form.Item>
                   <Checkbox
            className="login__checkbox"
            name="checkbox"
            value={checked}
            onChange={(event) => setChecked(event.target.value)}
          >
           Remember my details 
                </Checkbox>
                  <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="signUp__button"
            onClick={handleForm }
          >
        sign in 
          </Button>
          </Form.Item>
          {/* <Link href="#forget">  Forget  password ? </Link> */}
          <span>  {error} </span>
      </Form>
        </div>

    )
}
export default LogIn