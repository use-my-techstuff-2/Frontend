import React from 'react';
import { useForm } from "react-hook-form";

export default function Login(props) {
    const { handleSubmit, login, errors } = useForm();
    const onSubmit = data => {
      console.log(data);
    };
  
    return (
      <form className="App" onSubmit={handleSubmit(onSubmit)}>

        <h1>Log in</h1>
  
        <label>Username: </label>
        <input
          name="username"
          ref={login({
            validate: value => value !== "admin" || "Nice try!"
          })}
        />
        {errors.username && errors.username.message}

        <label>Password: </label>
        <input
          name="password"
          ref={login({
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
  
        <button type="submit">Login</button>
      </form>
    );
  };

