import React, { useState } from "react";

import SideNav from "./SideNav";
import SideCard from "./SideCard";
import SearchBar from "./SearchBar";
import GadgetDisplay from "./GadgetDisplay";

const UserPage = () => {
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
