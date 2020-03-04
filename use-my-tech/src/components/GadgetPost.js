import React from "react";

const GadgetPost = ({ gadget }) => {
  return (
    <>
      <h1>{gadget.name}</h1>
      <p>{gadget.price}</p>
      <p>{gadget.location}</p>
    </>
  );
};
export default GadgetPost;