import React from "react";
import { global } from "../../../helpers/helpers";

const SorCCategoryItem = ({ SOrC, handleDelete, setEditPage }) => {
  function OpenEditPage() {
    setEditPage(true);
    global.admin.item = SOrC;
  }

  return (
    <tr>
      <td>{SOrC.title ? SOrC.title : ""}</td>
      <td className="category_link">
        {SOrC.tags[0].title
          ? SOrC.tags.map((tag, index) => {
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
          : "Не визначено"}
      </td>
      <td>
        {SOrC.malls[0].title
          ? SOrC.malls.map((mall, index) => {
              let sep = "";
              if (index !== 0) {
                sep = ", ";
              }
              return `${sep}${mall.title}`;
            })
          : "Не визначено"}
      </td>
      <td>
        <button onClick={() => OpenEditPage()} className="btn pt-1px">
          Edit
        </button>
        <button
          onClick={() => handleDelete(SOrC.id)}
          className="btn-del"
        ></button>
      </td>
    </tr>
  );
};

export default SorCCategoryItem;
