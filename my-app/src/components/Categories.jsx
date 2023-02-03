import React, { useState, useEffect, useRef } from "react";
import { global, networkCall } from ".././helpers/helpers";
import CategoryCreate from "./categories/CategoryCreate";
import CategoryEdit from "./categories/CategoryEdit";
import CategoryItem from "./categories/CategoryItem";
import Dialog from "./Dialog";

const Categories = ({ categories, updateCategories }) => {
  const [createPage, setCreatePage] = useState(false);
  const [editPage, setEditPage] = useState(false);
  const [dialog, setDialog] = useState({
    message: "",
    isLoading: false,
    nameProduct: "",
  });

  const idCategoryRef = useRef();
  const apiEndPoint = `${global.api}/category`;

  useEffect(() => {
    updateCategories();
  }, []);

  function AddCategory(category) {
    networkCall(
      { url: apiEndPoint, type: "post", content: category },
      () => updateCategories(),
      (error) => console.log("error", error)
    );
    setCreatePage(false);
  }

  function EditCategory(category) {
    networkCall(
      {
        url: apiEndPoint + "/" + global.admin.category.id,
        type: "put",
        content: category,
      },
      () => updateCategories(),
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
    const index = categories.findIndex((c) => c.id === id);
    handleDialog(
      "Are you sure you want to delete?",
      true,
      categories[index].title
    );
    idCategoryRef.current = id;
  }

  function areUSureDelete(choose) {
    if (choose) {
      networkCall(
        { url: apiEndPoint + "/" + idCategoryRef.current, type: "delete" },
        () => updateCategories(),
        (error) => console.log("error", error)
      );
    }
    handleDialog("", false);
  }

  function outputTableLines() {
    if (categories.length > 0) {
      return (
        categories.map((category, index, arr) => {
          if (index + 1 < arr.length || arr.length >= 10) {
            return (
              <CategoryItem
                category={category}
                handleDelete={handleDelete}
                setEditPage={setEditPage}
                key={category.id}
              />
            )
          }
          else if (arr.length < 10) {
            let tempArr = [];
            tempArr.push(
              <CategoryItem
                category={category}
                handleDelete={handleDelete}
                setEditPage={setEditPage}
                key={category.id}
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
      <CategoryCreate
        className="position-absolute"
        style={{ width: "100%", left: "0" }}
        AddCategory={AddCategory}
        prePage={setCreatePage}
      />
    );
  } else if (editPage) {
    return (
      <CategoryEdit
        className="position-absolute"
        style={{ width: "100%", left: "0" }}
        EditCategory={EditCategory}
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

export default Categories;
