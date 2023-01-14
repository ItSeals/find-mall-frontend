import React from "react";
import { global } from "../../helpers/helpers";

const TagItem = ({ tag, handleDelete, setEditPage }) => {
  function OpenEditPage() {
    setEditPage(true);
    global.admin.tag = tag;
  }

  return (
    <tr>
      <td>{tag.title ? tag.title : ""}</td>
      <td>
        <button onClick={() => OpenEditPage()} className="btn pt-1px">
          Edit
        </button>
        <button
          onClick={() => handleDelete(tag.id)}
          className="btn-del"
        ></button>
      </td>
    </tr>
  );
};

export default TagItem;
