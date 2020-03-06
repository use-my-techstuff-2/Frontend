import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { navigate } from "@reach/router";

const UserPost = ({ gadget }) => {
  const deleteItem = (id) => {
    console.log(id);
    axiosWithAuth()
      .delete(`gadgets/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const editItem = (id) => {
    console.log(id);
    navigate(`edititem/${id}`);
  };

  return (
    <div className="yourPost">
      <h3 className="yourPost__title">{gadget.name}</h3>
      <div className="post__info">
        <p className="yourPost__price">{gadget.price}</p>
        <p className="yourPost__location">{gadget.location}</p>
        <button onClick={() => deleteItem(gadget.id)}>Delete</button>
        <button onClick={() => editItem(gadget.id)}>Edit</button>
      </div>
    </div>
  );
};

export default UserPost;
