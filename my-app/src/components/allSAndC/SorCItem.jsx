import React from "react";
import { global } from "../../helpers/helpers";
import { Link } from "react-router-dom";

const SorCItem = ({ SOrC, handleDelete, setEditPage }) => {
  function OpenEditPage() {
    setEditPage(true);
    global.admin.item = SOrC;
  }

  return (
    <tr>
      <td>{SOrC.title ? SOrC.title : ""}</td>
      <td>
        <Link to={`/admin/items/${SOrC.category.id}`} className="category_link">
          {SOrC !== undefined ? SOrC.category.title : ""}
        </Link>
      </td>
      <td>
        {SOrC !== undefined && SOrC.malls.length > 0
          ? SOrC.malls.map((mall, index) => {
              let sep = "";
              if (index !== 0) {
                sep = ", ";
              }
              return `${sep}${mall.title}`;
            })
          : ""}
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

export default SorCItem;
