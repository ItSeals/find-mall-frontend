import React, { useState, useRef, useEffect } from "react";
import { global, networkCall } from "../../helpers/helpers";

const OtherTagCreate = (props) => {
  const [items, setItems] = useState([]);

	const nameBodyRef = useRef("");
  const itemBodyRef = useRef(1);
	const itemsIsLoadedRef = useRef(false);

  useEffect(() => {
    networkCall(
      { url: `${global.api}/item`, type: "get" },
      (res) => setItems(res),
      (error) => console.log("error", error)
    );
  }, []);

	useEffect(() => {
    if (items.length !== 0 && itemsIsLoadedRef.current === false) {
			itemBodyRef.current.value = items[0].id;
			itemsIsLoadedRef.current = true;
    }
  }, [items]);

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
            <td style={{ position: "relative" }}>
              <div className="title-input">Name:</div>
              <input
                ref={nameBodyRef}
                type="text"
              />
            </td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
						<td style={{ position: "relative" }}>
              <div className="title-input">item:</div>
							<select
                ref={itemBodyRef}
              >
                {items.map((item) => {
                  return <option value={item.id}>{item.title}</option>;
                })}
              </select>
            </td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td>
							{items.length !== 0 ? (
              <button
                onClick={() =>
                  props.AddTag({
                    title: nameBodyRef.current.value,
										item: Number(itemBodyRef.current.value)
                  })
                }
                className="btn btn-large"
              >
                Create
              </button>
              ) : (
                <div class="spinner-border text-primary" role="status">
                  <span class="sr-only"></span>
                </div>
              )}
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

export default OtherTagCreate;
