import React, { useState, useEffect, useRef } from "react";
import { global, networkCall } from "../helpers/helpers";
import TagCreate from "./tags/TagCreate";
import TagEdit from "./tags/TagEdit";
import TagItem from "./tags/TagItem";
import TagItemBG from "./tags/TagItemBG";
import Dialog from "./Dialog";

const Tags = () => {
  const [tags, setTags] = useState([])
  const [createPage, setCreatePage] = useState(false);
  const [editPage, setEditPage] = useState(false);
  const [dialog, setDialog] = useState({
    message: "",
    isLoading: false,
    nameProduct: "",
  });

  const idTagRef = useRef();
  const apiEndPoint = `${global.api}/tag`;

  useEffect(() => {
    updateTags();
  }, []);

  function AddTag(tag) {
    networkCall(
      { url: apiEndPoint, type: "post", content: tag },
      () => updateTags(),
      (error) => console.log("error", error)
    );
    setCreatePage(false);
  }

  function EditTag(tag) {
    networkCall(
      {
        url: apiEndPoint + "/" + global.admin.tag.id,
        type: "put",
        content: tag,
      },
      () => updateTags(),
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
    const index = tags.findIndex((t) => t.id === id);
    handleDialog(
      "Are you sure you want to delete?",
      true,
      tags[index].title
    );
    idTagRef.current = id;
  }

  function areUSureDelete(choose) {
    if (choose) {
      networkCall(
        { url: apiEndPoint + "/" + idTagRef.current, type: "delete" },
        () => updateTags(),
        (error) => console.log("error", error)
      );
    }
    handleDialog("", false);
  }

  function updateTags() {
    networkCall(
      { type: "get", url: `${global.api}/tag` },
      (res) => setTags(res),
      (error) => console.log("error", error)
    );
  }

  function outputTableLines() {
    if (tags.length > 0) {
      return (
        tags.map((tag, index, arr) => {
          if (index + 1 < arr.length) {
            return (
              <TagItem
                tag={tag}
                handleDelete={handleDelete}
                setEditPage={setEditPage}
                key={tag.id}
              />
            )
          }
          else if (arr.length < 10) {
            let tempArr = [];
            tempArr.push(
              <TagItem
                tag={tag}
                handleDelete={handleDelete}
                setEditPage={setEditPage}
                key={tag.id}
              />
            );
            for (let i = 0; i < 8 - index + 1; i++) {
              tempArr.push(
                <tr>
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
          </tr>
        );
      }
      return tempArr.map((element) => element);
    }
  }

  if (createPage) {
    return (
      <TagCreate
        className="position-absolute"
        style={{ width: "100%", left: "0" }}
        AddTag={AddTag}
        prePage={setCreatePage}
      />
    );
  } else if (editPage) {
    return (
      <TagEdit
        className="position-absolute"
        style={{ width: "100%", left: "0" }}
        EditTag={EditTag}
        prePage={setEditPage}
      />
    );
  } else {
    return (
      <div
        className="position-relative overflow-auto"
        style={{ height: "100vh" }}
      >
        <table className="admin-table" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Name</th>
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
            {tags.map((tag) => (
              <TagItem
                tag={tag}
                handleDelete={handleDelete}
                setEditPage={setEditPage}
                key={tag.id}
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

export default Tags;
