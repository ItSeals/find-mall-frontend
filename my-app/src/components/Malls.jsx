import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import MallCreate from './malls/MallCreate';
import MallEdit from './malls/MallEdit';
import MallItem from './malls/MallItem';

const Malls = (props) => {
  const [malls, setMalls] = useState([])
  const [createPage, setCreatePage] = useState(false)
  const [editPage, setEditPage] = useState({is: false, mall: {}})
  const apiEndPoint = "http://localhost:3000/mall";

  useEffect(() => {
    const getMalls = async () => {
      const { data: res } = await axios.get(apiEndPoint)
      setMalls(res)
    }
    getMalls()
  }, [malls])

  const AddMall = async (mall) => {
    await axios.post(apiEndPoint, mall);
    setMalls([...malls, mall]);
    setCreatePage(false)
  };

  const EditMall = async (mall) => {
    console.log(mall)
    await axios.put(apiEndPoint + "/" + mall.id, mall);
    const mallsClone = [...malls];
    const index = mallsClone.indexOf(mall);
    mallsClone[index] = { ...mall };
    setMalls(mallsClone);
    setEditPage({mall: {}, is: false})
  };

  const DeleteMall = async (mall) => {
    await axios.delete(apiEndPoint + "/" + mall.id);
    setMalls(malls.filter((m) => m.id !== mall.id));
  };

  if (createPage) {
    return (
      <MallCreate className={`${props.className} position-fixed`} AM={AddMall}/>
    )
  } else if (editPage.is) {
    return (
      <MallEdit className={`${props.className} position-fixed`} ME={EditMall} mall={editPage.mall}/>
    )
  } else {
    return (
      <div className={`${props.className} position-relative`}>
        <table className='admin-table position-absolute' style={{width: '100%', zIndex: '-1'}}>
          <thead>
            <tr>
              <th style={{width: '20%'}}></th>
              <th></th>
              <th style={{width: '230px'}}></th>
            </tr>
          </thead>
          <tbody>
            <tr><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td></tr>
          </tbody>
        </table>
        <table className='admin-table' style={{width: '100%'}}>
          <thead>
            <tr>
              <th style={{width: '20%'}}>
                Name
              </th>
              <th>
                Location
              </th>
              <th style={{width: '230px'}}>
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
              <MallItem mall={mall} MD={DeleteMall} sEP={setEditPage} ME={EditMall} Mlength={malls.length} key={mall.id}/>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Malls