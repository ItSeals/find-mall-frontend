import React from "react";

const TagItemBG = (props) => {
  return (
    <tr>
      <td>{props.tag !== undefined ? props.tag.title : ""}</td>
      <td>
        <button className="btn pt-1px opacity-0"></button>
      </td>
    </tr>
  );
};

export default TagItemBG;
