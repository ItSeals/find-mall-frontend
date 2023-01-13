import React from "react";

const SorCCategoryItemBG = (props) => {
  return (
    <tr>
      <td>{props.SorC !== undefined ? props.SorC.title : ""}</td>
      <td>{props.SorC !== undefined ? props.SorC.category.title : ""}</td>
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

export default SorCCategoryItemBG;
