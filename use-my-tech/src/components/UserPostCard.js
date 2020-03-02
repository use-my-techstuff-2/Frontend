import React from "react";

const gadgets = [
  {
    id: 10,
    owner_id: 1,
    name: "Laptop",
    price: 75,

    location: "Atlanta"
  },
  {
    id: 11,
    owner_id: 1,
    name: "TV",
    price: 75,

    location: "Atlanta"
  },
  {
    id: 12,
    owner_id: 1,
    name: "X-box",
    price: 75,

    location: "VA"
  },
  {
    id: 13,
    owner_id: 1,
    name: "Laptop",
    price: 75,

    location: "CO"
  }
];

const UserPostCard = () => {
  return (
    <div>
      <h1>Posts</h1>
      {gadgets.map((gadget) => (
        <div key={gadget.id} className="yourPost">
          <h3 className="yourPost__title">{gadget.name}</h3>
          <p className="yourPost__price">{gadget.price}</p>
          <p className="yourPost__location">{gadget.location}</p>
        </div>
      ))}
    </div>
  );
};

export default UserPostCard;
