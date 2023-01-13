import React from "react";
import { Link } from "react-router-dom";

const SorCItemBG = (props) => {
  return (
    <tr>
      <td>{props.SorC !== undefined ? props.SorC.title : ""}</td>
      <td>
        <Link
          to={`/admin/items/${
            props.SorC !== undefined ? props.SorC.category.title : ""
          }`}
          className="category_link"
        >
          {props.SorC !== undefined ? props.SorC.category.title : ""}
        </Link>
      </td>
      <td>
        {props.SorC !== undefined
          ? props.SorC.malls.map((mall, index) => {
              let sep = "";
              if (index !== 0) {
                sep = ", ";
              }
              return `${sep}${mall.title}`;
            })
          : ""}
      </td>
      <td>
        <button className="btn pt-1px opacity-0"></button>
      </td>
    </tr>
  );
};

export default SorCItemBG;
