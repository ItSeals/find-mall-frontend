import React from "react";
import { global } from "../../helpers/helpers";

const SorCItem = ({ mall, MD, ME, sEP }) => {
  function OpenEditPage() {
    sEP(true);
    global.admin.item = mall;
  }

  return (
    <tr>
      <td>{mall.title ? mall.title : ""}</td>
      <td>{mall.category.title ? mall.category.title : ""}</td>
      <td>
        {mall.malls[0].title
          ? mall.malls.map((mall, index) => {
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
        <button onClick={() => MD(mall.id)} className="btn-del"></button>
      </td>
    </tr>
  );
};

export default SorCItem;
