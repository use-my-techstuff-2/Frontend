import React from "react";
import { useForm } from "react-hook-form";
import { useDropdown } from "../hooks/useDropdown";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../actions/constants";
const appliances = ["TV", "Xbox", "Laptop"];

const SearchBar = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const query = useSelector((state) => state.query);
  const [searchItem, SearchItemDropdown, setSearchItem] = useDropdown(
    "Search Items",
    appliances,
    "All"
  );

  const onSubmit = ({ search }) => {
    console.log({ search });
    dispatch({ type: actions.SEARCH_BY_QUERY, payload: search });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="search">
          <input type="text" name="search" id="search" ref={register} />
          <button>Search</button>
          {query ? <p>{query}</p> : null}
        </label>
      </form>
      <SearchItemDropdown />
    </>
  );
};

export default SearchBar;
