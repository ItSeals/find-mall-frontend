import React, { useState, useEffect, useRef } from "react";
import { global, networkCall } from ".././helpers/helpers";
import Dialog from "./Dialog";
import MallCreate from "./malls/MallCreate";
import MallEdit from "./malls/MallEdit";
import MallItem from "./malls/MallItem";

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
  }

  function EditMall(mall) {
    networkCall(
      { url: apiEndPoint + "/" + global.admin.mall.id, type: "put", content: mall },
      () => updateMalls(),
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
    const index = malls.findIndex((m) => m.id === id);
    handleDialog("Are you sure you want to delete?", true, malls[index].title);
    idMallRef.current = id;
  }

  function areUSureDelete(choose) {
    if (choose) {
      networkCall(
        { url: apiEndPoint + "/" + idMallRef.current, type: "delete" },
        () => updateMalls(),
        (error) => console.log("error", error)
      );
    }
    handleDialog("", false);
  }

  function updateMalls() {
    networkCall(
      { url: apiEndPoint, type: "get" },
      (res) => setMalls(res),
      (error) => console.log("error", error)
    );
  }

  function outputTableLines() {
    if (malls.length > 0) {
      return (
        malls.map((mall, index, arr) => {
          if (index + 1 < arr.length || arr.length >= 10) {
            return (
              <MallItem
                mall={mall}
                MD={handleDelete}
                sEP={setEditPage}
                ME={EditMall}
                Mlength={malls.length}
                key={mall.id}
              />
            )
          }
          else if (arr.length < 10) {
            let tempArr = [];
            tempArr.push(
              <MallItem
                mall={mall}
                MD={handleDelete}
                sEP={setEditPage}
                ME={EditMall}
                Mlength={malls.length}
                key={mall.id}
              />
            );
            for (let i = 0; i < 8 - index + 1; i++) {
              tempArr.push(
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              );
            }
            return tempArr.map((element) => element);
          }
        })
      )
    }
    else {
      let tempArr = [];
      for (let i = 0; i < 10; i++) {
        tempArr.push(
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        );
      }
      return tempArr.map((element) => element);
    }
  }

  if (createPage) {
    return (
      <MallCreate
        className={`${props.className} position-fixed`}
        style={{ width: "100%", left: "0", overflow: "auto", height: "92vh" }}
        AM={AddMall}
        prePage={setCreatePage}
      />
    );
  } else if (editPage) {
    return (
      <MallEdit
        className={`${props.className} position-fixed`}
        style={{ width: "100%", left: "0", overflow: "auto", height: "92vh" }}
        ME={EditMall}
        prePage={setEditPage}
        mall={editPage.mall}
      />
    );
  } else {
    return (
      <div
        className={`${props.className} position-relative overflow-auto`}
				style={{height: "92vh"}}
      >
        <table className="admin-table" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Name</th>
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
            {outputTableLines()}
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
