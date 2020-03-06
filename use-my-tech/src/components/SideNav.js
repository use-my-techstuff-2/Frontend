/**@jsx jsx*/
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { css, jsx } from "@emotion/core";
import { FaAlignJustify, FaRegWindowClose } from "react-icons/fa";

import { actions } from "../actions/constants";
import colors from "../styles/colors";

const styledNav = css`
  height: 10%;
  border-radius: 20px;
  width: 50%;
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

  return (
    <div
      className="sideNav"
      css={css`
        ${styledNav}
      `}
    >
      <button
        onClick={toggleMenu}
        css={css`
          background: ${showMenu ? "transparent" : "pink"};
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
  );
};

export default SideNav;
