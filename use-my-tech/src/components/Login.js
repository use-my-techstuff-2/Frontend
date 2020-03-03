import React from 'react';
import { useForm } from "react-hook-form";

export default function Login(props) {
    const { handleSubmit, errors } = useForm();
    const onSubmit = data => {
      console.log(data);
    };
  
    return (
      <form className="App" onSubmit={handleSubmit(onSubmit)}>

        <h1>Log in</h1>
  
        <label>Username: </label>
        <input
          type="text"
          name="username"
          required
        />
        {errors.username && errors.username.message}

        <label>Password: </label>
        <input
          name="password"
          required
        />
        {errors.password && errors.password.message}
  
        <button type="submit">Login</button>
      </form>
    );
  };

