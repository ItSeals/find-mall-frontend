import React from "react";

const CategoryItemBG = (props) => {
  return (
    <tr>
      <td>{props.category !== undefined ? props.category.title : ""}</td>
      <td>
        <button className="btn pt-1px opacity-0"></button>
      </td>
    </tr>
  );
};

export default CategoryItemBG;
