import React, { useState, useEffect, useRef } from "react";
import { global, networkCall } from ".././helpers/helpers";
import CategoryCreate from "./categories/CategoryCreate";
import CategoryEdit from "./categories/CategoryEdit";
import CategoryItem from "./categories/CategoryItem";
import CategoryItemBG from "./categories/CategoryItemBG";
import Dialog from "./Dialog";

const Categories = () => {
  const [categories, setCategories] = useState([]);
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

  function updateCategories() {
    networkCall(
      { url: apiEndPoint, type: "get" },
      (res) => setCategories(res),
      (error) => console.log("error", error)
    );
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
        <table
          className="admin-table position-absolute"
          style={{ width: "100%" }}
        >
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
            <CategoryItemBG category={categories[0]} />
            <CategoryItemBG category={categories[1]} />
            <CategoryItemBG category={categories[2]} />
            <CategoryItemBG category={categories[3]} />
            <CategoryItemBG category={categories[4]} />
            <CategoryItemBG category={categories[5]} />
            <CategoryItemBG category={categories[6]} />
            <CategoryItemBG category={categories[7]} />
            <CategoryItemBG category={categories[8]} />
            <CategoryItemBG category={categories[9]} />
          </tbody>
        </table>
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
            {categories.map((category) => (
              <CategoryItem
                category={category}
                handleDelete={handleDelete}
                setEditPage={setEditPage}
                key={category.id}
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

export default Categories;
