// import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { GiTiredEye } from "react-icons/gi";
import { GiEyelashes } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  let greetings = "Welcome to login page";
  var studentInfo = {
    id: 111,
    name: "Shaktiman",
    email: "gangadhar@vshesh.com",
  };

  const navigate = useNavigate();
  const onLogInAction = () => {
    console.log(formValue);
    const url = "https://reqres.in/api/login";

    axios
      .post(url)
      .then((response) => {
        console.log("Your In");
        navigate("/mail/inbox");
      })
      .catch((error) => {
        console.log("Sorry ");
      });
  };

  const [formValue, setFormValue] = useState({
    email: " ",
    password: " ",
  });

  const [passwordStatus, setpasswordStatus] = useState(true);

  const OnHandleInput = (event) => {
    // console.log(event.target.value);
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
    console.log(formValue);
  };

  const passwordVisiblty = (status) => {
    setpasswordStatus(status);
  };

  return (
    <div className="main">
      <div className="js_output">
        <h2> {greetings}</h2>
        <p>
          {" "}
          Id : {studentInfo.id}     Name : {studentInfo.name}{" "}
        </p>
        <p> Email : {studentInfo.email} </p>
        <p> Email : {formValue.email} </p>
        <h3>
          The student name is {studentInfo.email}, and he is {studentInfo.email}{" "}
          years old
        </h3>
        {/* <h1>
          Your email id is {formValue.email} and password{" "}
          {formValue.password}
        </h1> */}
      </div>

      <div className="loginitem">
        <img src={require("../images/jz.jpg")} height="200vh" alt="Janat" />
        <img
          src="https://filmfare.wwmindia.com/content/2021/aug/youngest-bollywood-actress-sanjana-sanghi-51629879242.jpg"
          height="200vh"
          alt="Sushant"
        />
      </div>
      <div className="space">
        <label className="align-label">Enter your Email ID</label>
        <input
          type="text"
          className="align-input"
          placeholder="Please enter email id"
          onChange={OnHandleInput}
          name="email"
        />
      </div>
      <div className="space">
        <label className="align-label">Enter your Password</label>
        <input
          type={passwordStatus ? "password" : "text"}
          className="align-input"
          placeholder="Please enter password"
          onChange={OnHandleInput}
          name="password"
        />
        {passwordStatus ? (
          <GiEyelashes
            className="password_eye"
            size={30}
            onClick={() => passwordVisiblty(false)}
          />
        ) : (
          <GiTiredEye
            className="password_eye"
            size={30}
            onClick={() => passwordVisiblty(true)}
          />
        )}
      </div>
      <div className="space">
        <button className="button-63">Login</button>
        <button className="button-63" onClick={() => onLogInAction()}>
          onclickAction
        </button>
      </div>
      <div className="space">
        <h1>Conditional Rendering Demos</h1>
        <h2>Inline IF condition</h2>
        {false && <h1>Good Day!</h1>}
        <h2>Inline IF ELSE Condition</h2>
        {false ? <h1>Good Morning!</h1> : <h1>Good Night</h1>}
      </div>
      <NavLink to="/">Go to Home Page</NavLink>
    </div>
  );
};

export default LoginPage;
