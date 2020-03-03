import React from 'react';
import { useForm } from 'react-hook-form';
import {FormGroup, FormControl, FormLabel} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Login(props) {
    const { handleSubmit, errors } = useForm();
    const onSubmit = data => {
      console.log(data);
    };
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>

        <h1>Welcome</h1>
        <h3>Hello, Welcome back please log in.</h3>
        <h3>New user Register <Link to='/Register'>Here</Link></h3>

        <FormGroup controlId='formBasicUsername'>
          <FormLabel>Username: </FormLabel>
          <FormControl
            type='text'
            name='username'
            required
            placeholder='Enter username'
          />
          {errors.username && errors.username.message}
        </FormGroup>

        <FormGroup controlId='formBasicPassword'>
          <FormLabel>Password: </FormLabel>
          <FormControl
            name="password"
            required
            placeholder='Enter password'
          />
          {errors.password && errors.password.message}
        </FormGroup>
  
        <button type="submit">Login</button>
      </form>
    );
  };

