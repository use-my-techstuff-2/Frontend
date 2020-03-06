/**@jsx jsx*/
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { css, jsx } from "@emotion/core";
import { FaAlignJustify, FaRegWindowClose } from "react-icons/fa";
import SearchBar from "./SearchBar";

import { actions } from "../actions/constants";
import colors from "../styles/colors";

const styledNav = css`
  height: 100%;
  border-radius: 20px;
  width: 20%;
  /* background: ${colors.secondar}; */
  z-index: 100;
  button {

    border: none;
    height: 100%;
    width: 100%;
    transition:all .2s;
  }
  svg {
    color: white;
    font-size: 2.5rem;
  }
`;
const SideNav = () => {
  const dispatch = useDispatch();
  const showMenu = useSelector((state) => state.sideNavShow);

  const toggleMenu = () => {
    dispatch({ type: actions.SIDE_NAV_SHOW_TOGGLE });
  };
  const navbar = css`
    width: 100%;
    background: ${colors.light};
    display: flex;
    .signOut {
      height: 100%;
      background: transparent;
      color: ${colors.primary};
      font-size: 1.3rem;
      border: none;
    }
  `;
  return (
    <div className="full__nav" css={navbar}>
      <div
        className="sideNav"
        css={css`
          ${styledNav}
        `}
      >
        <button
          onClick={toggleMenu}
          css={css`
            background: ${showMenu ? "transparent" : `${colors.secondar}`};
          `}
        >
          {showMenu ? (
            <FaRegWindowClose />
          ) : (
            <FaAlignJustify
              css={css`
                transition: all 0.3s;
                opacity: ${showMenu ? "0" : "1"};
              `}
            />
          )}
        </button>
      </div>
      <SearchBar />
      <button className="signOut">Sign Out</button>
    </div>
  );
};

export default SideNav;
