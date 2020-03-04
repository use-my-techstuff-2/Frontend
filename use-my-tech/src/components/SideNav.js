/**@jsx jsx*/
import React, { useState } from "react";
import { css, jsx } from "@emotion/core";

const styledNav = css`
  height: 100%;
  background: pink;
  ul {
    height: 100%;
    list-style: none;
    li {
      height: 33%;
    }
    button {
      border: none;
      height: 100%;
      width: 85%;
    }
  }
`;

const SideNav = () => {
  return (
    <div
      className="sideNav"
      css={css`
        ${styledNav}
      `}
    >
      <ul>
        <li>
          <button>Your Posts</button>
        </li>
        <li>
          <button>Watched Posts</button>
        </li>
        <li>
          <button>Messages </button>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
