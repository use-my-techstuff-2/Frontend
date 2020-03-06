/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";

import colors from "../styles/colors";

const GadgetPost = ({ gadget }) => {
  const rent = (id) => {
    return null;
  };

  return (
    <div
      className="gadget__container"
      css={css`
        border: 4px solid ${colors.secondar};
        border-left: 4px solid ${colors.dark};
        border-top: 4px solid ${colors.dark};
        background: linear-gradient(
          135deg,
          ${colors.secondar} 60%,
          ${colors.light} 60%
        );
        display: grid;
        grid-template-columns: 65% 35%;
        grid-template-rows: 50% 50%;
        justify-content: center;
        align-items: center;
        padding: 3%;
        max-height: 20vh;
        h3 {
          color: white;
          font-size: 1.6rem;
          padding: 4% 0 0 4%;
        }
        .price {
          color: white;
          font-size: 1.4rem;
          font-weight: 500;
        }
        .location {
          color: white;
          text-align: right;
          padding: 3%;
        }
        button {
          width: 50%;
          background: ${colors.primary};
          border: none;
          margin: 0 auto;
          padding: 2%;
          border-radius: 10px;
          color: ${colors.light};
          font-weight: 800;
          background: ${colors.secondar};
        }
      `}
    >
      <h3>{gadget.name}</h3>

      <p className="location">{gadget.location}</p>
      <p className="price">${gadget.price}</p>
      <button onClick={() => rent(gadget.id)}>Rent</button>
    </div>
  );
};
export default GadgetPost;

// css={css`
//         color: ${colors.primary};
//         border: 1px black solid;
//         background: linear-gradient(
//             90deg,
//             ${colors.dark} 65%,
//             ${colors.light} 65%
//           ),
//           linear-gradient(${colors.light}, ${colors.secondar});
//         width: 100%;
//         display: grid;
//         grid-template-columns: auto-fill;
//         grid-template-rows: 35px 80%;
//         height: 5vh;
//         overflow: hidden;
//         transition: height 0.3s ease;
//         text-align: right;

//         &:hover {
//           height: 20vh;
//           transition: all 0.2s ease;
//         }
//         /* gridTemplateColumns: "repeat(3 1fr)"; */
//         /* text-align: center;
//         align-items: center;
//         align-content: center; */
//         div {
//           width: 100%;
//           height: 20vh;
//           grid-column: 1/3;
//           display: grid;
//           grid-template-columns: 45% 45%;
//           grid-gap: 10%;
//           grid-template-areas:
//             "image location"
//             "image price";
//           justify-items: space-around;
//           transform: translateY(-14vh);

//           transition: all 0.2s ease;
//           & > * {
//             opacity: 0;
//             transition: all 0.2s ease;
//           }
//         }
//         &:hover div {
//           /* background-color: pink; */
//           transform: translateY(0);
//           opacity: 1;
//         }
//         &:hover div > * {
//           opacity: 1;
//         }
//         p {
//           font-size: 0.8rem;
//           width: 85%;
//           grid-area: location;
//         }

//         & .price {
//           grid-area: price;
//           font-size: 1.3rem;
//           opacity: 1 !important;
//         }
//         &:hover {
//           transform: scaleY(100%);
//         }
//         .img_container {
//           width: 50%;
//           height: 100%;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           grid-area: image;
//         }
//         h1 {
//           font-size: 1rem;
//           height: 100%;
//           margin: auto 0;
//           font-size: 1.3rem;
//           text-align: left;
//           background: linear-gradient(
//             140deg,
//             ${colors.secondar} 70%,
//             ${colors.light} 70%
//           );
//           width: 100%;
//           grid-column: 1/3;
//         }
//       `}
