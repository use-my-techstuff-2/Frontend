import React from 'react';
import { useForm } from 'react-hook-form';
import {FormGroup, FormControl, FormLabel} from 'react-bootstrap';

export default function Register(props) {
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = data => {
      console.log(data);
    };
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>

        <h1>Sign Up</h1>
        <FormGroup controlId='formBasicFirstName'>
          <FormLabel>First Name: </FormLabel>
          <FormControl
            name='firstName'
            ref={register({
              required: 'Required',
              minLength: 2,
              pattern: {
                value: /^[A-Z]/i,
                message: 'invalid first name'
              }
            })}
            type='text'
            placeholder='Enter first name'
          />
          {errors.firstName && errors.firstName.message}
          {errors.firstName && errors.firstName.type === "minLength" && (
              <p>This is field required min length of 2</p>
          )}
          {errors.firstName && errors.firstName.type === "pattern" && (
              <p>First name has to be A-Z characters</p>
          )}
        </FormGroup>

        <FormGroup controlId='formBasicLastName'>
          <FormLabel>Last Name: </FormLabel>
          <FormControl
            name='lastName'
            ref={register({
              required: 'Required',
              minLength: 2,
              pattern: {
                value: /^[A-Z]/i,
                message: 'invalid last name'
              }
            })}
            type='text'
            placeholder='Enter last name'
          />
          {errors.lastName && errors.lastName.message}
          {errors.lastName && errors.lastName.type === 'minLength' && (
              <p>This is field required min length of 2</p>
          )}
          {errors.lastName && errors.lastName.type === 'pattern' && (
              <p>Last name has to be A-Z characters</p>
          )}
        </FormGroup>

        <FormGroup controlId='formBasicEmail'>
          <FormLabel>Email: </FormLabel>
          <FormControl
            name='email'
            ref={register({
              required: 'Required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'invalid email address'
              }
            })}
            type='email'
            placeholder='Enter email'
          />
          {errors.email && errors.email.message}
        </FormGroup>
    
        <FormGroup controlId='formBasicUserName'>
          <FormLabel>Username: </FormLabel>
          <FormControl
            name='username'
            ref={register({
              validate: value => value !== 'admin' || 'Nice try!'
            })}
            type='username'
            placeholder='Enter username'
          />
          {errors.username && errors.username.message}
        </FormGroup>

        <FormGroup controlId='formBasicPassword'>
          <FormLabel>Password: </FormLabel>
          <FormControl
            name='password'
            ref={register({
              required: 'Required',
              minLength: 6,
              pattern: {
                value: /^[A-Z0-9._%+-]/i,
                message: 'invalid password'
              }
            })}
            type='password'
            placeholder='Enter password'
          />
          {errors.password && errors.password.message}
          {errors.password && errors.password.type === 'minLength' && (
              <p>This is field required min length of 6</p>
          )}
        </FormGroup>
  
        <button variant='primary' type='submit'>Submit</button>
      </form>
    );
  };

