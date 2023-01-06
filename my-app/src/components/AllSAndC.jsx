import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { global, networkCall } from '.././helpers/helpers';
import Dialog from './Dialog';
import SorCCreate from './allSAndC/SorCCreate';
import SorCEdit from './allSAndC/SorCEdit';
import SorCItem from './allSAndC/SorCItem';

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
            <tr><td>{malls[0] !== undefined ? malls[0].title : ''}</td><td>{malls[0] !== undefined ? malls[0].category.title : ''}</td><td>{malls[0] !== undefined ? malls[0].malls.map((mall, index) => { let sep = ''; if (index !== 0) {sep = ', '} return `${sep}${mall.title}` }) : ''}</td><td><button className='btn pt-1px opacity-0'></button></td></tr>
            <tr><td>{malls[1] !== undefined ? malls[1].title : ''}</td><td>{malls[1] !== undefined ? malls[1].category.title : ''}</td><td>{malls[1] !== undefined ? malls[1].malls.map((mall, index) => { let sep = ''; if (index !== 0) {sep = ', '} return `${sep}${mall.title}` }) : ''}</td><td><button className='btn pt-1px opacity-0'></button></td></tr>
            <tr><td>{malls[2] !== undefined ? malls[2].title : ''}</td><td>{malls[2] !== undefined ? malls[2].category.title : ''}</td><td>{malls[2] !== undefined ? malls[2].malls.map((mall, index) => { let sep = ''; if (index !== 0) {sep = ', '} return `${sep}${mall.title}` }) : ''}</td><td><button className='btn pt-1px opacity-0'></button></td></tr>
            <tr><td>{malls[3] !== undefined ? malls[3].title : ''}</td><td>{malls[3] !== undefined ? malls[3].category.title : ''}</td><td>{malls[3] !== undefined ? malls[3].malls.map((mall, index) => { let sep = ''; if (index !== 0) {sep = ', '} return `${sep}${mall.title}` }) : ''}</td><td><button className='btn pt-1px opacity-0'></button></td></tr>
            <tr><td>{malls[4] !== undefined ? malls[4].title : ''}</td><td>{malls[4] !== undefined ? malls[4].category.title : ''}</td><td>{malls[4] !== undefined ? malls[4].malls.map((mall, index) => { let sep = ''; if (index !== 0) {sep = ', '} return `${sep}${mall.title}` }) : ''}</td><td><button className='btn pt-1px opacity-0'></button></td></tr>
            <tr><td>{malls[5] !== undefined ? malls[5].title : ''}</td><td>{malls[5] !== undefined ? malls[5].category.title : ''}</td><td>{malls[5] !== undefined ? malls[5].malls.map((mall, index) => { let sep = ''; if (index !== 0) {sep = ', '} return `${sep}${mall.title}` }) : ''}</td><td><button className='btn pt-1px opacity-0'></button></td></tr>
            <tr><td>{malls[6] !== undefined ? malls[6].title : ''}</td><td>{malls[6] !== undefined ? malls[6].category.title : ''}</td><td>{malls[6] !== undefined ? malls[6].malls.map((mall, index) => { let sep = ''; if (index !== 0) {sep = ', '} return `${sep}${mall.title}` }) : ''}</td><td><button className='btn pt-1px opacity-0'></button></td></tr>
            <tr><td>{malls[7] !== undefined ? malls[7].title : ''}</td><td>{malls[7] !== undefined ? malls[7].category.title : ''}</td><td>{malls[7] !== undefined ? malls[7].malls.map((mall, index) => { let sep = ''; if (index !== 0) {sep = ', '} return `${sep}${mall.title}` }) : ''}</td><td><button className='btn pt-1px opacity-0'></button></td></tr>
            <tr><td>{malls[8] !== undefined ? malls[8].title : ''}</td><td>{malls[8] !== undefined ? malls[8].category.title : ''}</td><td>{malls[8] !== undefined ? malls[8].malls.map((mall, index) => { let sep = ''; if (index !== 0) {sep = ', '} return `${sep}${mall.title}` }) : ''}</td><td><button className='btn pt-1px opacity-0'></button></td></tr>
            <tr><td>{malls[9] !== undefined ? malls[9].title : ''}</td><td>{malls[9] !== undefined ? malls[9].category.title : ''}</td><td>{malls[9] !== undefined ? malls[9].malls.map((mall, index) => { let sep = ''; if (index !== 0) {sep = ', '} return `${sep}${mall.title}` }) : ''}</td><td><button className='btn pt-1px opacity-0'></button></td></tr>
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
            //Update
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