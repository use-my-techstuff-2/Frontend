import React from 'react';
import { useForm } from 'react-hook-form';
import {FormGroup, FormControl, FormLabel} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const Div = styled.div`
  text-align: center;
  padding: 13%;
`;

const Div1 = styled.div`
  padding: 0% 0% 2% 0%;
`;

const Div2 = styled.div`
  padding: 0% 0% 2% 0%;
`;

export default function Login() {
  const { errors } = useForm();

  function handleSubmit(event) {

    const {username, password} = this.state;
  
  axios
      .post('https://usemytechstuff-bw.herokuapp.com/api/auth/login', 
        {
          username: username,
          password: password
        }
      )
      .then(res => {
        this.props.history.push('/')
        console.log('this is register res',res)
      })
      .catch(error => {
        console.log('error', error);
      })
    event.preventDefault();
  }

  function render() {
    return (
      <Div>
      <form onSubmit={handleSubmit}>

        <Div1>
        <h1>Welcome</h1>
        <h3>Hello, Welcome back please log in.</h3>
        <h3>New user Register <Link to='/Register'>Here</Link></h3>
        </Div1>

        <FormGroup controlId='formBasicUsername'>
          <Div2>
            <FormLabel>Username: </FormLabel>
            <FormControl
              type='text'
              name='username'
              required
              placeholder='Enter username'
            />
            {errors.username && errors.username.message}
          </Div2>
        </FormGroup>

        <FormGroup controlId='formBasicPassword'>
          <Div2>
            <FormLabel>Password: </FormLabel>
            <FormControl
              name="password"
              required
              placeholder='Enter password'
            />
            {errors.password && errors.password.message}
            </Div2>
        </FormGroup>
  
        <button type="submit">Login</button>
      </form>
      </Div>
    );
  }
  return render();
};

