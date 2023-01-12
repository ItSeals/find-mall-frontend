import React from "react";
import { global } from "../../helpers/helpers";

const CategoryItem = ({ category, handleDelete, setEditPage }) => {
  function OpenEditPage() {
    setEditPage(true);
    global.admin.category = category;
  }

  return (
    <tr>
      <td>{category.title ? category.title : ""}</td>
      <td>
        <button onClick={() => OpenEditPage()} className="btn pt-1px">
          Edit
        </button>
        <button
          onClick={() => handleDelete(category.id)}
          className="btn-del"
        ></button>
      </td>
    </tr>
  );
};

export default CategoryItem;
