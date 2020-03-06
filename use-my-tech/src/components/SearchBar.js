/**@jsx jsx*/
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../actions/constants";

import { css, jsx } from "@emotion/core";
import colors from "../styles/colors";
// const appliances = ["TV", "Xbox", "Laptop"];

const searchStyles = css`
  display: flex;
  width: 100%;
  height: 20vh;
  justify-content: center;
  align-items: center;
  form {
    margin-top: 5%;
    height: 10%;
    width: 40%;
    display: grid;
  }
  input {
    height: 5vh;
    border: none;
    border-bottom: 3px ${colors.secondar} solid;
    display: block;
    margin-bottom: 10%;
    width: 100%;
  }
  button {
    padding: 2% 5%;
    font-size: 1.5rem;
    border: 1px ${colors.secondar} solid;
    border-radius: 5px;
    margin: 0 auto;
  }
`;

const SearchBar = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const query = useSelector((state) => state.query);
  // const [searchItem, SearchItemDropdown, setSearchItem] = useDropdown(
  //   "Search Items",
  //   appliances,
  //   "All"
  // );

  const onSubmit = ({ search }) => {
    console.log({ search });
    dispatch({ type: actions.SEARCH_BY_QUERY, payload: search.toLowerCase() });
  };

  return (
    <div
      className="searchForm"
      css={css`
        ${searchStyles}
      `}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="search">
          <input
            type="text"
            name="search"
            id="search"
            ref={register}
            placeHolder="Search all offers"
          />
          <button>Search</button>
          {query ? <p>{query}</p> : null}
        </label>
      </form>
    </div>
  );
};

export default SearchBar;
