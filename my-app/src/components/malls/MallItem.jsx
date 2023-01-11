import React from "react";
import { global } from "../../helpers/helpers";

const MallItem = ({ mall, MD, sEP }) => {
  function OpenEditPage() {
    sEP(true);
    global.admin.mall = mall;
  }

  return (
    <tr>
      <td>{mall.title ? mall.title : ""}</td>
      <td>{mall.location ? mall.location : ""}</td>
      <td>
        <button onClick={() => OpenEditPage()} className="btn pt-1px">
          Edit
        </button>
        <button onClick={() => MD(mall.id)} className="btn-del"></button>
      </td>
    </tr>
  );
};

export default MallItem;
