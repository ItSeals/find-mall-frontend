import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import CreateMallPage from './CreateMallPage';
import EditMallPage from './EditMallPage';
import FirstPageMainItem from './FirstPageMainItem';

const FirstPageMain = (props) => {
  const [malls, setMalls] = useState([])
  const [createPage, setCreatePage] = useState(false)
  const [editPage, setEditPage] = useState({mall: {}, is: false})
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

  const MallEdit = async (mall) => {
    console.log(mall)
    await axios.put(apiEndPoint + "/" + mall.id, mall);
    const mallsClone = [...malls];
    const index = mallsClone.indexOf(mall);
    mallsClone[index] = { ...mall };
    setMalls(mallsClone);
    setEditPage({mall: {}, is: false})
  };

  const MallDelete = async (mall) => {
    await axios.delete(apiEndPoint + "/" + mall.id);
    setMalls(malls.filter((m) => m.id !== mall.id));
  };

  if (createPage) {
    return (
      <CreateMallPage {...props} AM={AddMall}/>
    )
  } else if (editPage.is) {
    return (
      <EditMallPage {...props} ME={MallEdit} mall={editPage.mall}/>
    )
  } else {
    return (
      <div {...props}>
        <table className='admin' style={{width: '100%'}}>
          <tr>
            <th>
              <div>Name</div>
            </th>
            <th>
              <div>Category</div>
            </th>
            <th>
              <div>Location</div>
            </th>
            <th>
              <div>
                <button 
                  onClick={() => setCreatePage(true)}
                  className='btn btn-primary'
                >
                  Create
                </button>
              </div>
            </th>
          </tr>
          {malls.map((mall) => (
            <FirstPageMainItem mall={mall} MD={MallDelete} sEP={setEditPage} ME={MallEdit} key={mall.id}/>
          ))}
        </table>
      </div>
    )
  }
}

export default FirstPageMain