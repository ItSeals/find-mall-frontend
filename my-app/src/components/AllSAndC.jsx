import React, { useState, useEffect, useRef } from "react";
import { global, networkCall } from ".././helpers/helpers";
import Dialog from "./Dialog";
import SorCCreate from "./allSAndC/SorCCreate";
import SorCEdit from "./allSAndC/SorCEdit";
import SorCItem from "./allSAndC/SorCItem";
import SorCItemBG from "./allSAndC/SorCItemBG";

const AllSAndC = (props) => {
  const [allSAndC, setAllSAndC] = useState([]);
  const [createPage, setCreatePage] = useState(false);
  const [editPage, setEditPage] = useState(false);
  const [dialog, setDialog] = useState({
    message: "",
    isLoading: false,
    nameProduct: "",
  });

  const idMallRef = useRef();

  useEffect(() => {
    updateAllSAndC();
  }, []);

  function updateAllSAndC() {
    networkCall(
      { url: `${global.api}/item`, type: "get" },
      (res) => setAllSAndC(res),
      (error) => console.log("error", error)
    );
  }

  function AddSOrC(mall) {
    networkCall(
      { url: `${global.api}/item`, type: "post", content: mall },
      () => updateAllSAndC(),
      (error) => console.log("error", error)
    );
    setCreatePage(false);
  }

  function EditSOrC(mall) {
    networkCall(
      { url: `${global.api}/item/${mall.id}`, type: "put", content: mall },
      () => updateAllSAndC(),
      (error) => console.log("error", error)
    );
    setEditPage(false);
  }

  function handleDialog(message, isLoading, nameProduct) {
    setDialog({
      message,
      isLoading,
      nameProduct,
    });
  }

  function handleDelete(id) {
    const index = allSAndC.findIndex((m) => m.id === id);
    handleDialog("Are you sure you want to delete?", true, allSAndC[index].title);
    idMallRef.current = id;
  }

  function areUSureDelete(choose) {
    if (choose) {
      networkCall(
        { url: `${global.api}/item/${idMallRef.current}`, type: "delete" },
        () => updateAllSAndC(),
        (error) => console.log("error", error)
      );
    }
    handleDialog("", false);
  }

  if (createPage) {
    return (
      <SorCCreate
        className={`${props.className} position-absolute`}
        style={{ width: "100%", left: "0" }}
        AddSOrC={AddSOrC}
        setCreatePage={setCreatePage}
      />
    );
  } else if (editPage) {
    return (
      <SorCEdit
        className={`${props.className} position-absolute`}
        style={{ width: "100%", left: "0" }}
        EditSOrC={EditSOrC}
        setEditPage={setEditPage}
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
              <th>Name</th>
              <th>Category</th>
              <th>Mall List</th>
              <th style={{ width: "230px", maxWidth: "20%" }}>
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
            <SorCItemBG SorC={allSAndC[0]}></SorCItemBG>
            <SorCItemBG SorC={allSAndC[1]}></SorCItemBG>
            <SorCItemBG SorC={allSAndC[2]}></SorCItemBG>
            <SorCItemBG SorC={allSAndC[3]}></SorCItemBG>
            <SorCItemBG SorC={allSAndC[4]}></SorCItemBG>
            <SorCItemBG SorC={allSAndC[5]}></SorCItemBG>
            <SorCItemBG SorC={allSAndC[6]}></SorCItemBG>
            <SorCItemBG SorC={allSAndC[7]}></SorCItemBG>
            <SorCItemBG SorC={allSAndC[8]}></SorCItemBG>
            <SorCItemBG SorC={allSAndC[9]}></SorCItemBG>
          </tbody>
        </table>
        <table className="admin-table" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Mall List</th>
              <th style={{ width: "230px", maxWidth: "20%" }}>
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
            {allSAndC.map((SOrC) => (
              <SorCItem
                SOrC={SOrC}
                handleDelete={handleDelete}
                setEditPage={setEditPage}
                key={SOrC.id}
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

export default AllSAndC;
