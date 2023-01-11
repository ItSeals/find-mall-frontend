import React from "react";

const MallItemBG = (props) => {
  return (
    <tr>
      <td>{props.mall !== undefined ? props.mall.title : ""}</td>
      <td>{props.mall !== undefined ? props.mall.location : ""}</td>
      <td>
        <button className="btn pt-1px opacity-0"></button>
      </td>
    </tr>
  );
};

export default MallItemBG;
