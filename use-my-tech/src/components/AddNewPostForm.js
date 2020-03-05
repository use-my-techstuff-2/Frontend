/**@jsx jsx*/
import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { css, jsx } from "@emotion/core";
import { navigate } from "@reach/router";
import colors from "../styles/colors";

const styledForm = css`
  background-color: ${colors.light};
  height: 73vh;
  text-align: center;
  color: ${colors.primary};

  label {
    font-size: 1.4rem;
    padding: 10% 0;
  }
  input {
    color: ${colors.primary};
    background-color: transparent;
    border: none;
    border-bottom: 2px solid ${colors.secondar};
    height: 7%;
    font-size: 1.5rem;
    display: block;
    width: 70%;
    margin: 0 auto;
  }
`;

const AddNewPostForm = () => {
  const { register, error, handleSubmit, reset } = useForm();
  const user = useSelector((state) => state.user_id);

  const onSubmit = (values) => {
    const newItem = {
      location: `${values.city}, ${values.state}`,
      name: values.name,
      price: values.price,
      owner_id: user
    };
    console.log(newItem);
    axiosWithAuth()
      .post("/gadgets/1", newItem)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => error);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      css={css`
        ${styledForm}
      `}
    >
      <h2>Add a new item</h2>
      <label htmlFor="name">
        Item
        <input type="text" name="name" ref={register} id="name" />
      </label>
      <label htmlFor="price">
        Price
        <input type="text" name="price" ref={register} id="price" />
      </label>
      <label htmlFor="location">
        City
        <input type="text" name="city" ref={register} id="city" />
      </label>
      <label htmlFor="location">
        State
        <input type="text" name="state" ref={register} id="city" />
      </label>
      <button>Add Item</button>
    </form>
  );
};

export default AddNewPostForm;
