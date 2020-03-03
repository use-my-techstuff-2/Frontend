import React from 'react';
import { useForm } from "react-hook-form";

export default function Register(props) {
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = data => {
      console.log(data);
    };
  
    return (
      <form className="App" onSubmit={handleSubmit(onSubmit)}>

        <h1>Sign Up</h1>

        <label>First Name: </label>
        <input
          name="firstName"
          ref={register({
            required: 'Required',
            minLength: 2,
            pattern: {
              value: /^[A-Z]/i,
              message: "invalid first name"
            }
          })}
        />
        {errors.firstName && errors.firstName.message}
        {errors.firstName && errors.firstName.type === "minLength" && (
            <p>This is field required min length of 2</p>
        )}
        {errors.firstName && errors.firstName.type === "pattern" && (
            <p>First name has to be A-Z characters</p>
        )}

        <label>Last Name: </label>
        <input
          name="lastName"
          ref={register({
            required: 'Required',
            minLength: 2,
            pattern: {
              value: /^[A-Z]/i,
              message: "invalid last name"
            }
          })}
        />
        {errors.lastName && errors.lastName.message}
        {errors.lastName && errors.lastName.type === "minLength" && (
            <p>This is field required min length of 2</p>
        )}
        {errors.lastName && errors.lastName.type === "pattern" && (
            <p>Last name has to be A-Z characters</p>
        )}

        <label>Email: </label>
        <input
          name="email"
          ref={register({
            required: 'Required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "invalid email address"
            }
          })}
        />
        {errors.email && errors.email.message}
  
        <label>Username: </label>
        <input
          name="username"
          ref={register({
            validate: value => value !== "admin" || "Nice try!"
          })}
        />
        {errors.username && errors.username.message}

        <label>Password: </label>
        <input
          name="password"
          ref={register({
            required: 'Required',
            minLength: 6,
            pattern: {
              value: /^[A-Z0-9._%+-]/i,
              message: "invalid password"
            }
          })}
        />
        {errors.password && errors.password.message}
        {errors.password && errors.password.type === "minLength" && (
            <p>This is field required min length of 6</p>
        )}
  
        <button type="submit">Submit</button>
      </form>
    );
  };

