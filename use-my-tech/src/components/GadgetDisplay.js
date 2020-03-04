/** @jsx jsx */
import React from "react";
import GadgetPost from "./GadgetPost";
import { css, jsx } from "@emotion/core";

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
    <div
      css={{
        display: "grid",
        gridTemplateColumns: "30% 30% 30%",
        justifyContent: "space-around",
        gridRowGap: "10%",
        width: "100%"
      }}
    >
      {gadgets.map((gadget) => (
        <GadgetPost gadget={gadget} />
      ))}
    </div>
  );
};

export default GadgetDisplay;
