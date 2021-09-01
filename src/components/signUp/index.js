import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { auth } from "../../firebase/firebase";
import "./style.less";
import { useHistory } from "react-router-dom";


function SignUp() {
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory();

  const signUp = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords dont match!");
    }else{
        auth
          .createUserWithEmailAndPassword(email, password)
          .then((auth) => {
            console.log("auth obj :", auth);
            if (auth) {
              history.push("/");
            }
          })
          .catch((err) => {
            alert(err.message);
          });
    }
  };
  return (
    
    <div className="signUP">
        <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        className="signUp__form"
      >
        <h2 className="signUp__title">CREATE ACCOUNT</h2>

        <Form.Item
          name="Firstname"
          rules={[
            {
              required: true,
              message: "Please input your First name!",
            },
          ]}
          className="signUp__formItem"
        >
          <label>First name</label>
          <Input
            type="text"
            value={fName}
            onChange={(event) => setFname(event.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="Lastname"
          rules={[
            {
              required: true,
              message: "Please input your First name!",
            },
          ]}
          className="signUp__formItem"
        >
          <label>Last name</label>
          <Input
            type="text"
            value={lName}
            onChange={(event) => setLname(event.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="Email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
          className="signUp__formItem"
        >
          <label>Email</label>
          <Input
            type="email"
            // value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          className="signUp__formItem"
        >
          <label>Create Password</label>
          <Input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          rules={[
            {
              required: true,
              message: { error },
            },
          ]}
          className="signUp__formItem"
        >
          <label>Confirm Password</label>
          <Input
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          {error && <span style={{color:"red"}}>{error}</span>}
        </Form.Item>
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox
            className="signUp__checkbox"
            value={checked}
            onChange={(event) => {
              setChecked(event.target.value);
            }}
          >
            I want to receive Safari newsletters with the best deals and offers
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="signUp__button"
            onClick={signUp}
          >
            CREATE ACCOUNT
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default SignUp;
