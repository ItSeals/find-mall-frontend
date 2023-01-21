import React from "react";

const SorCCategoryItemBG = (props) => {
  return (
    <tr>
      <td>{props.SorC !== undefined ? props.SorC.title : ""}</td>
      <td className="category_link">
        {props.SorC !== undefined && props.SorC.tags.length > 0
          ? props.SorC.tags.map((tag, index) => {
              let sep = "";
              if (index !== 0) {
                sep = ", ";
              }
              return (
                <>
                  {sep}
                  <span className="underline-thin-font">{tag.title}</span>
                </>
              );
            })
          : ""}
      </td>
      <td>
        {props.SorC !== undefined && props.SorC.malls.length > 0
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
