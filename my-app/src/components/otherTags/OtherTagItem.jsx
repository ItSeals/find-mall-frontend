import React from "react";
import { global } from "../../helpers/helpers";

const TagItem = ({ tag: otherTag, handleDelete, setEditPage }) => {
  function OpenEditPage() {
    setEditPage(true);
    global.admin.otherTag = otherTag;
  }

  return (
    <tr>
      <td>{otherTag.title ? otherTag.title : ""}</td>
			<td>{otherTag.item.title ? otherTag.item.title : ""}</td>
      <td>
        <button onClick={() => OpenEditPage()} className="btn pt-1px">
          Edit
        </button>
        <button
          onClick={() => handleDelete(otherTag.id)}
          className="btn-del"
        ></button>
      </td>
    </tr>
  );
};

export default TagItem;
