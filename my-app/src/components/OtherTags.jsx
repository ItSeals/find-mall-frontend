import React, { useState, useEffect, useRef } from "react";
import { global, networkCall } from "../helpers/helpers";
import OtherTagCreate from "./otherTags/OtherTagCreate";
import OtherTagEdit from "./otherTags/OtherTagEdit";
import OtherTagItem from "./otherTags/OtherTagItem";
import Dialog from "./Dialog";

const OtherTags = () => {
  const [otherTags, setOtherTags] = useState([])
  const [createPage, setCreatePage] = useState(false);
  const [editPage, setEditPage] = useState(false);
  const [dialog, setDialog] = useState({
    message: "",
    isLoading: false,
    nameProduct: "",
  });

  const idOtherTagRef = useRef();
  const apiEndPoint = `${global.api}/othertag`;

  useEffect(() => {
    updateOtherTags();
  }, []);

  function AddOtherTag(tag) {
    networkCall(
      { url: apiEndPoint, type: "post", content: tag },
      () => updateOtherTags(),
      (error) => console.log("error", error)
    );
    setCreatePage(false);
  }

  function EditOtherTag(tag) {
    networkCall(
      {
        url: apiEndPoint + "/" + global.admin.otherTag.id,
        type: "put",
        content: tag,
      },
      () => updateOtherTags(),
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
    const index = otherTags.findIndex((t) => t.id === id);
    handleDialog(
      "Are you sure you want to delete?",
      true,
      otherTags[index].title
    );
    idOtherTagRef.current = id;
  }

  function areUSureDelete(choose) {
    if (choose) {
      networkCall(
        { url: apiEndPoint + "/" + idOtherTagRef.current, type: "delete" },
        () => updateOtherTags(),
        (error) => console.log("error", error)
      );
    }
    handleDialog("", false);
  }

  function updateOtherTags() {
    networkCall(
      { type: "get", url: `${apiEndPoint}` },
      (res) => setOtherTags(res),
      (error) => console.log("error", error)
    );
  }

  function outputTableLines() {
    if (otherTags.length > 0) {
      return (
        otherTags.map((otherTag, index, arr) => {
          if (index + 1 < arr.length || arr.length >= 10) {
            return (
              <OtherTagItem
                tag={otherTag}
                handleDelete={handleDelete}
                setEditPage={setEditPage}
                key={otherTag.id}
              />
            )
          }
          else if (arr.length < 10) {
            let tempArr = [];
            tempArr.push(
              <OtherTagItem
                tag={otherTag}
                handleDelete={handleDelete}
                setEditPage={setEditPage}
                key={otherTag.id}
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
      <OtherTagCreate
        className="position-absolute"
        style={{ width: "100%", left: "0", overflow: "auto", height: "92vh" }}
        AddTag={AddOtherTag}
        prePage={setCreatePage}
      />
    );
  } else if (editPage) {
    return (
      <OtherTagEdit
        className="position-absolute"
        style={{ width: "100%", left: "0", overflow: "auto", height: "92vh" }}
        EditTag={EditOtherTag}
        prePage={setEditPage}
      />
    );
  } else {
    return (
      <div
        className="position-relative overflow-auto"
        style={{ height: "92vh" }}
      >
        <table className="admin-table" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>ItemName</th>
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

export default OtherTags;
