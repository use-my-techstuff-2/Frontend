import React from "react";
import GadgetPost from "./GadgetPost";

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

const GadgetDisplay = () => {
  return (
    <div>
      {gadgets.map((gadget) => (
        <GadgetPost gadget={gadget} />
      ))}
    </div>
  );
};

export default GadgetDisplay;
