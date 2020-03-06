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
  width: 70%;
  /* height: 20vh; */
  justify-content: center;
  align-items: center;
  form {
    margin: 0 5% 0;

    width: 100%;
    display: grid;
  }
  input {
    height: 5vh;
    border: none;
    background-border-bottom: 3px ${colors.secondar} solid;
    margin-right: 5%;
    width: 50%;
  }
  button {
    color: white;
    padding: 0.5% 3%;
    font-size: 1.2rem;
    background: linear-gradient(
      145deg,
      ${colors.secondar} 15%,
      ${colors.light} 15%
    );
    border: 1px ${colors.secondar} solid;
    border-radius: 5px;
    margin: 0 auto;
    &:hover {
      background: ${colors.light};
      box-shadow: 0 0 4px ${colors.primary};
    }
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
