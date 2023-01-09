import React, { useState, useEffect, useRef } from 'react';
import { global, networkCall } from '.././helpers/helpers';
import Dialog from './Dialog';
import SorCCreate from './allSAndC/SorCCreate';
import SorCEdit from './allSAndC/SorCEdit';
import SorCItem from './allSAndC/SorCItem';
import SorCItemBG from './allSAndC/SorCItemBG';

const AllSAndC = (props) => {
  const [malls, setMalls] = useState([])
  const [createPage, setCreatePage] = useState(false)
  const [editPage, setEditPage] = useState(false)
  const [dialog, setDialog] = useState({
    message: "",
    isLoading: false,
    nameProduct: ""
  });

  const idMallRef = useRef();

  useEffect(() => {
    updateMalls()
  }, [])

  function updateMalls() {
    networkCall(
      { url: `${global.api}/item`, type: "get" },
      (res) => setMalls(res),
      (error) => console.log("error", error)
    )
  }
  
  function AddMall(mall) {
    networkCall(
      { url: `${global.api}/item`, type: "post", content: mall},
      () => updateMalls(),
      (error) => console.log("error", error)
    )
    setCreatePage(false);
  };

  function EditMall(mall) {
    networkCall(
      { url: `${global.api}/item/${mall.id}`, type: "put", content: mall},
      () => updateMalls(),
      (error) => console.log("error", error)
    )
    setEditPage(false)
  };

  function handleDialog(message, isLoading, nameProduct) {
    setDialog({
      message,
      isLoading,
      nameProduct
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
        { url: `${global.api}/item/${idMallRef.current}`, type: "delete"},
        () => updateMalls(),
        (error) => console.log("error", error)
      )
    }
    handleDialog("", false)
  };

  if (createPage) {
    return (
      <SorCCreate className={`${props.className} position-absolute`} style={{width: '100%', left: '0'}} AM={AddMall} prePage={setCreatePage} />
    )
  } else if (editPage) {
    return (
      <SorCEdit className={`${props.className} position-absolute`} style={{width: '100%', left: '0'}} ME={EditMall} prePage={setEditPage} />
    )
  } else {
    return (
      <div className={`${props.className} position-relative overflow-auto`} style={{height: '100vh'}}>
        <table className='admin-table position-absolute' style={{width: '100%'}}>
          <thead>
            <tr>
              <th>
                Name
              </th>
              <th>
                Category
              </th>
              <th>
                Mall List
              </th>
              <th style={{width: '230px', maxWidth: '20%'}}>
                <button 
                  onClick={() => setCreatePage(true)}
                  className='btn pt-1px'
                >
                  Create
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            <SorCItemBG SorC={malls[0]}></SorCItemBG>
            <SorCItemBG SorC={malls[1]}></SorCItemBG>
            <SorCItemBG SorC={malls[2]}></SorCItemBG>
            <SorCItemBG SorC={malls[3]}></SorCItemBG>
            <SorCItemBG SorC={malls[4]}></SorCItemBG>
            <SorCItemBG SorC={malls[5]}></SorCItemBG>
            <SorCItemBG SorC={malls[6]}></SorCItemBG>
            <SorCItemBG SorC={malls[7]}></SorCItemBG>
            <SorCItemBG SorC={malls[8]}></SorCItemBG>
            <SorCItemBG SorC={malls[9]}></SorCItemBG>
          </tbody>
        </table>
        <table className='admin-table' style={{width: '100%'}}>
          <thead>
            <tr>
              <th>
                Name
              </th>
              <th>
                Category
              </th>
              <th>
                Mall List
              </th>
              <th style={{width: '230px', maxWidth: '20%'}}>
                <button 
                  onClick={() => setCreatePage(true)}
                  className='btn pt-1px'
                >
                  Create
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {malls.map((mall) => (
              <SorCItem mall={mall} MD={handleDelete} sEP={setEditPage} ME={EditMall} Mlength={malls.length} key={mall.id}/>
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
    )
  }
}

export default AllSAndC