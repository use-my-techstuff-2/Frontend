import React from "react";
import { useForm } from "react-hook-form";
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actions } from "../actions/constants";
import styled from "styled-components";
import axios from "axios";

const Div = styled.div`
  text-align: center;
  padding: 13% 13% 80% 13%;
  background: #292c2d;
`;

const Div1 = styled.div`
  padding: 0% 0% 2% 0%;
  color: white;
`;

const Div2 = styled.div`
  padding: 0% 0% 2% 0%;
  color: white;
`;

const Section = styled.section`
  background: #550c18;
  border: 3px solid #9c9e9e;
  padding-bottom: 3%;
  width: 80%;
  margin-left: 10%;
`;

export default function Login() {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  function submitHandler(values) {
    console.log(values);
    axios
      .post("https://usemytechstuff-bw.herokuapp.com/api/auth/login", values)
      .then((res) => {
        console.log("this is login res");
        console.log(res.data.token);
        localStorage.setItem("token", res.data.token);
        dispatch({ type: actions.SET_USER, payload: res.data.id });
        history.push("/posts");
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  function render() {
    return (
      <Div>
        <Section>
          <form onSubmit={handleSubmit(submitHandler)}>
            <Div1>
              <h1>Welcome</h1>
              <h3>Hello, Welcome back please log in.</h3>
              <h3>
                New user Register <Link to="/">Here</Link>
              </h3>
            </Div1>

            <FormGroup controlId="formBasicUsername">
              <Div2>
                <FormLabel>Username: </FormLabel>
                <FormControl
                  type="text"
                  name="username"
                  required
                  placeholder="Enter username"
                  ref={register}
                />
                {errors.username && errors.username.message}
              </Div2>
            </FormGroup>

            <FormGroup controlId="formBasicPassword">
              <Div2>
                <FormLabel>Password: </FormLabel>
                <FormControl
                  name="password"
                  required
                  placeholder="Enter password"
                  ref={register}
                />
                {errors.password && errors.password.message}
              </Div2>
            </FormGroup>

            <button type="submit">Login</button>
          </form>
        </Section>
      </Div>
    );
  }
  return render();
}
