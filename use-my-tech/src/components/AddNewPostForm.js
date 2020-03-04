import React from "react";
import { useForm } from "react-hook-form";

const AddNewPostForm = () => {
  const { register, error, handleSubmit } = useForm();

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">
        <input type="text" name="name" ref={register} id="name" />
      </label>
      <label htmlFor="price">
        <input type="text" name="price" ref={register} id="price" />
      </label>
      <label htmlFor="location">
        <input type="text" name="location" ref={register} id="location" />
      </label>
      <button>Add Item</button>
    </form>
  );
};

export default AddNewPostForm;
