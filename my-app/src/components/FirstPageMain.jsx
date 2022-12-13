import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import CreateMallPage from './CreateMallPage';
import FirstPageMainItem from './FirstPageMainItem';

const FirstPageMain = (props) => {
  const [malls, setMalls] = useState([])
  const [createPage, setCreatePage] = useState(false)
  const apiEndPoint = "http://localhost:3000/mall";
  let editPage = false

  useEffect(() => {
    const getMalls = async () => {
      const { data: res } = await axios.get(apiEndPoint)
      setMalls(res)
    }
    getMalls()
  }, [malls])

  const OpenCreateMallPage = async () => {
    setCreatePage(true)
  };

  const AddMall = async (mall) => {
    await axios.post(apiEndPoint, mall);
    setMalls([...malls, mall]);
    setCreatePage(false)
  };

  const MallEdit = async (mall) => {
    mall.title = `Updated mall whith id: ${mall.id}`;
    await axios.patch(apiEndPoint + "/" + mall.id, mall);
    const postsClone = [...malls];
    const index = postsClone.indexOf(mall);
    postsClone[index] = { ...mall };
    setMalls(postsClone);
  };

  const MallDelete = async (mall) => {
    await axios.delete(apiEndPoint + "/" + mall.id);
    setMalls(malls.filter((m) => m.id !== mall.id));
  };

  if (createPage) {
    return (
      <CreateMallPage {...props} AM={AddMall}/>
    )
  } else if (editPage) {
    // return ()
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
                  onClick={OpenCreateMallPage}
                  className='btn btn-primary'
                >
                  Create
                </button>
              </div>
            </th>
          </tr>
          {malls.map((mall) => (
            <FirstPageMainItem mall={mall} MD={MallDelete} ME={MallEdit} key={mall.id}/>
          ))}
        </table>
      </div>
    )
  }
}

export default FirstPageMain