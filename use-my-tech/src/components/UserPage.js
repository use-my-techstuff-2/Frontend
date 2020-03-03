import React, { useState, useEffect } from "react";
import axios from "axios";

import SideNav from "./SideNav";
import SideCard from "./SideCard";
import SearchBar from "./SearchBar";
import GadgetDisplay from "./GadgetDisplay";

const UserPage = () => {
  useEffect(() => {
    axios
      .put("https://usemytechstuff-bw.herokuapp.com/api/gadgets/1", {
        name: "Xbox",
        price: 100,
        location: "Cali"
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", JSON.stringify(res.data.id));
      })
      .catch((error) => console.log({ error }));
  }, []);
  useEffect(() => {
    axios
      .get("https://usemytechstuff-bw.herokuapp.com/api/gadgets/1/gadgets", {
        username: "test",
        password: "test"
      })
      .then((res) => {
        console.log(res, "Login");
      })
      .catch((error) => console.log({ error }));
  }, []);
  useEffect(() => {
    axios
      .get("https://usemytechstuff-bw.herokuapp.com/api/gadgets")
      .then((res) => {
        console.log(res, "Login");
      })
      .catch((error) => console.log({ error }));
  }, []);

  return (
    <div>
      <SideNav />
      <SideCard />
      <SearchBar />
      <GadgetDisplay />
    </div>
  );
};

export default UserPage;
