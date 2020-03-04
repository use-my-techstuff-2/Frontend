import React from 'react';
import { useForm } from 'react-hook-form';
import {FormGroup, FormControl, FormLabel} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const Div = styled.div`
  text-align: center;
  padding: 13% 13% 50% 13%;
  background: #292C2D;
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
  background: #550C18;
  border: 3px solid #9C9E9E;
  padding-bottom: 3%;
  width: 80%;
  margin-left: 10%;
`;

export default function Register() {
  const { register, errors } = useForm();

  function handleSubmit(event) {

    const {username, password} = this.state;

    axios
      .post('https://usemytechstuff-bw.herokuapp.com/api/auth/register', 
        {
          username: username,
          password: password
        }
      )
      .then(res => {
        this.props.history.push('/login')
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
        <Section>
          <form onSubmit={handleSubmit}>

            <Div1>
              <h1>Welcome</h1>
              <h3>Hello, Please Register here.</h3>
              <h3>Already have an account? Login <Link to='/Login'>Here</Link></h3>
            </Div1>
        
            <FormGroup controlId='formBasicUserName'>
              <Div2>
                <FormLabel>Username: </FormLabel>
                <FormControl
                  name='username'
                  ref={register({
                    validate: value => value !== 'admin' || 'Nice try!',
                    required: 'Required'
                  })}
                  type='username'
                  placeholder='Enter username'
                />
                {errors.username && errors.username.message}
              </Div2>
            </FormGroup>

            <FormGroup controlId='formBasicPassword'>
              <Div2>
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
              </Div2>
            </FormGroup>
      
            <button variant='primary' type='submit'>Submit</button>
          </form>
        </Section>
      </Div>
    );
  }
  return render();
};
