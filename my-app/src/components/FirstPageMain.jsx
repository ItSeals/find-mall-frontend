import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import FirstPageMainItem from './FirstPageMainItem';

const FirstPageMain = (props) => {
  const [malls, setMalls] = useState([])

  const apiEndPoint = "http://localhost:3000/mall";

  useEffect(() => {
    const getMalls = async () => {
      const { data: res } = await axios.get(apiEndPoint)
      setMalls(res)
    }
    getMalls()
  }, [malls])

  const AddMall = async () => {
    const mall = {title: `New Mall №${malls.length + 1}`, description: "New description", status: 1 };
    await axios.post(apiEndPoint, mall);
    setMalls([...malls, mall]);
  };

  const MallDelete = async (mall) => {
    await axios.delete(apiEndPoint + "/" + mall.id);
    setMalls(malls.filter((p) => p.id !== mall.id));
  };

  return (
    <div {...props} style={{textAlign: 'center'}}>
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
                onClick={AddMall} 
                className='btn btn-primary'
              >
                Create
              </button>
            </div>
          </th>
        </tr>
        {malls.map((mall) => (
          <FirstPageMainItem mall={mall} MD={MallDelete} key={mall.id}/>
        ))}
      </table>
    </div>
  )
}

export default FirstPageMain