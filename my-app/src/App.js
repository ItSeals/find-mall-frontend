import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { global, networkCall } from "./helpers/helpers";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Login from "./Login";
import SideBar from "./components/SideBar";
import Malls from "./components/Malls";
import Categories from "./components/Categories";
import AllSAndC from "./components/AllSAndC";
import SorCCategory from "./components/allSAndC/SorCCategory";

function App() {
  //const [success, setSuccess] = useState(true);
  //
  // if (success === false) {
  //   return (
  //     <main className="App">
  //       <Login success={success} setSuccess={setSuccess}/>
  //     </main>
  //   );
  // } else {
  //   return(
  //     <SideBar/>
  //   )
  // }

  const [categories, setCategories] = useState([{}]);

  function updateCategories() {
    networkCall(
      { type: "get", url: `${global.api}/category` },
      (res) => setCategories(res),
      (error) => console.log("error", error)
    );
  }

  useEffect(() => updateCategories(), []);

  return (
    <Routes>
      <Route path="/" element={<SideBar categories={categories} />}>
        <Route index={true} element={<Malls />} />
      </Route>
      <Route path="admin" element={<SideBar categories={categories} />}>
        <Route index={true} element={<Malls />} />
        <Route path="login" element={<Login />} />
        <Route path="malls" element={<Malls />} />
        <Route
          path="categories"
          element={
            <Categories
              categories={categories}
              updateCategories={updateCategories}
            />
          }
        />
        <Route path="items" element={<AllSAndC />} />
        {categories.map((category) => {
          return (
            <Route
              path={`items/${category.id}`}
              element={<SorCCategory categoryId={category.id} />}
            />
          );
        })}
      </Route>
      <Route path="*" element={<div>error 404: not faund page</div>} />
    </Routes>
  );
}

export default App;
