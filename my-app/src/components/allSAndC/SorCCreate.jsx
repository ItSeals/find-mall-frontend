import React, { useState, useEffect, useRef } from "react";
import { networkCall } from "../../helpers/helpers";

const SorCCreate = (props) => {
  const [updatedPage, setUpdatedPage] = useState(false);

  const nameBodyRef = useRef("");
  const categoriesRef = useRef([]);
  const categoryBodyRef = useRef(1);
  const SOrCCategoryRef = useRef({});
  const mallListRef = useRef([]);
  const mallListBodyRef = useRef([1]);
  const SOrCMallListRef = useRef([]);

  useEffect(() => {
    networkCall(
      { url: "http://localhost:3000/category", type: "get" },
      (res) => {
        categoriesRef.current = res;
        console.log("res", categoriesRef.current);
      },
      (error) => console.log("error", error)
    );
    networkCall(
      { url: "http://localhost:3000/mall", type: "get" },
      (res) => (mallListRef.current = res),
      (error) => console.log("error", error)
    );
    setInterval(() => setUpdatedPage(true), 100);
  }, []);

  function getSelectedOptionsFrom(optionsData, valueCallback) {
    var value = [];
    for (var i = 0, l = optionsData.length; i < l; i++) {
      if (optionsData[i].selected) {
        value.push(optionsData[i].value);
      }
    }
    valueCallback(value);
  }

  function updateSOrCCategoryRef() {
    networkCall(
      {
        url: `http://localhost:3000/category/${categoryBodyRef.current.value}`,
        type: "get",
      },
      ({ id, title }) => (SOrCCategoryRef.current = { id, title }),
      (error) => console.log("error", error)
    );
  }

  function updateSOrCMallListRef(options) {
    getSelectedOptionsFrom(options, (val) => (mallListBodyRef.current = val));
    var ML = [];
    for (let index = 0; index < mallListBodyRef.current.length; index++) {
      networkCall(
        {
          url: `http://localhost:3000/mall/${mallListBodyRef.current[index]}`,
          type: "get",
        },
        (res) => ML.push(res),
        (error) => console.log("error", error)
      );
    }
    SOrCMallListRef.current = ML;
  }

  return (
    <div className={props.className} style={props.style}>
      <table className="admin-table" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th style={{ position: "relative" }}>
              <button
                onClick={() => props.prePage(false)}
                className="btn-pre-arrow"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7vh"
                  height="7vh"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="20" y1="12" x2="4" y2="12" />
                  <polyline points="10 18 4 12 10 6" />
                </svg>
              </button>
              Create
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="position-relative">
              <div className="title-input">Name:</div>
              <input type="text" ref={nameBodyRef} />
            </td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td className="position-relative">
              <div className="title-input">Category:</div>
              <select
                ref={categoryBodyRef}
                onChange={() => updateSOrCCategoryRef}
              >
                {categoriesRef.current.map((cat) => {
                  return <option value={cat.id}>{cat.title}</option>;
                })}
              </select>
            </td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td className="position-relative">
              <div className="title-input">Tags:</div>
              <input
                disabled
                type="text"
                value="В розробці"
                // onChange={event => setLocationBody(event.target.value)ma}
              />
            </td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td className="position-relative">
              <div className="title-input">Mall List</div>
              <select
                multiple={true}
                size="2"
                ref={mallListBodyRef}
                onChange={(event) =>
                  updateSOrCMallListRef(event.target.options)
                }
              >
                {mallListRef.current.map((cat) => {
                  return <option value={cat.id}>{cat.title}</option>;
                })}
              </select>
            </td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td>
              <button
                onClick={() =>
                  console.log("submit", {
                    title: nameBodyRef.current.value,
                    category: SOrCCategoryRef.current,
                    malls: SOrCMallListRef.current,
                  })
                }
                className="btn btn-large"
              >
                Create
              </button>
            </td>
          </tr>
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SorCCreate;
