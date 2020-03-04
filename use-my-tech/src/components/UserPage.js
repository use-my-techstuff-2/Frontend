import React from "react";
import SearchBar from "./SearchBar";
import GadgetDisplay from "./GadgetDisplay";
import SideNav from "./SideNav";
import SideCard from "./SideCard";


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
