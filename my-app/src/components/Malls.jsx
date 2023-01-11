import React, { useState, useEffect, useRef } from "react";
import { global, networkCall } from ".././helpers/helpers";
import Dialog from "./Dialog";
import MallCreate from "./malls/MallCreate";
import MallEdit from "./malls/MallEdit";
import MallItem from "./malls/MallItem";
import MallItemBG from "./malls/MallItemBG";

const Malls = (props) => {
  const [malls, setMalls] = useState([]);
  const [createPage, setCreatePage] = useState(false);
  const [editPage, setEditPage] = useState(false);
  const [dialog, setDialog] = useState({
    message: "",
    isLoading: false,
    nameProduct: "",
  });

  const idMallRef = useRef();
  const apiEndPoint = `${global.api}/mall`;

  useEffect(() => {
    updateMalls();
  }, []);

  function AddMall(mall) {
    networkCall(
      { url: apiEndPoint, type: "post", content: mall },
      () => updateMalls(),
      (error) => console.log("error", error)
    );
    setCreatePage(false);
  };

  function EditMall(mall) {
    networkCall(
      { url: apiEndPoint + "/" + global.admin.mall.id, type: "put", content: mall },
      () => updateMalls(),
      (error) => console.log("error", error)
    );
    setEditPage(false);
  };

  function handleDialog(message, isLoading, nameProduct) {
    setDialog({
      message,
      isLoading,
      nameProduct,
    });
  };

  function handleDelete(id) {
    const index = malls.findIndex((m) => m.id === id);
    handleDialog("Are you sure you want to delete?", true, malls[index].title);
    idMallRef.current = id;
  };

  function areUSureDelete(choose) {
    if (choose) {
      networkCall(
        { url: apiEndPoint + "/" + idMallRef.current, type: "delete" },
        () => updateMalls(),
        (error) => console.log("error", error)
      );
    }
    handleDialog("", false);
  };

  function updateMalls() {
    networkCall(
      { url: apiEndPoint, type: "get" },
      (res) => setMalls(res),
      (error) => console.log("error", error)
    );
  };

  if (createPage) {
    return (
      <MallCreate
        className={`${props.className} position-fixed`}
        style={{ width: "100%", left: "0" }}
        AM={AddMall}
        prePage={setCreatePage}
      />
    );
  } else if (editPage) {
    return (
      <MallEdit
        className={`${props.className} position-fixed`}
        style={{ width: "100%", left: "0" }}
        ME={EditMall}
        prePage={setEditPage}
        mall={editPage.mall}
      />
    );
  } else {
    return (
      <div
        className={`${props.className} position-relative overflow-auto`}
        style={{ height: "100vh" }}
      >
        <table
          className="admin-table position-absolute"
          style={{ width: "100%" }}
        >
          <thead>
            <tr>
              <th style={{ width: "20%" }}>Name</th>
              <th>Location</th>
              <th style={{ width: "230px" }}>
                <button
                  onClick={() => setCreatePage(true)}
                  className="btn pt-1px"
                >
                  Create
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            <MallItemBG mall={malls[0]} />
            <MallItemBG mall={malls[1]} />
            <MallItemBG mall={malls[2]} />
            <MallItemBG mall={malls[3]} />
            <MallItemBG mall={malls[4]} />
            <MallItemBG mall={malls[5]} />
            <MallItemBG mall={malls[6]} />
            <MallItemBG mall={malls[7]} />
            <MallItemBG mall={malls[8]} />
            <MallItemBG mall={malls[9]} />
          </tbody>
        </table>
        <table className="admin-table" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th style={{ width: "20%" }}>Name</th>
              <th>Location</th>
              <th style={{ width: "230px" }}>
                <button
                  onClick={() => setCreatePage(true)}
                  className="btn pt-1px"
                >
                  Create
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {malls.map((mall) => (
              <MallItem
                mall={mall}
                MD={handleDelete}
                sEP={setEditPage}
                ME={EditMall}
                Mlength={malls.length}
                key={mall.id}
              />
            ))}
          </tbody>
        </table>
        {dialog.isLoading && (
          <Dialog
            nameProduct={dialog.nameProduct}
            onDialog={areUSureDelete}
            message={dialog.message}
          />
        )}
      </div>
    );
  }
};

export default Malls;
