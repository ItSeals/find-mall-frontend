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
  }, [])

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
      <MallCreate {...props} AM={AddMall}/>
    )
  } else if (editPage.is) {
    return (
      <MallEdit {...props} ME={EditMall} mall={editPage.mall}/>
    )
  } else {
    return (
      // <div {...props}>
      //   <table className='admin' style={{width: '100%'}}>
      //     <thead>
      //       <tr>
      //         <th>
      //           <div>Name</div>
      //         </th>
      //         <th>
      //           <div>Location</div>
      //         </th>
      //         <th>
      //           <div>
      //             <button 
      //               onClick={() => setCreatePage(true)}
      //               className='btn btn-primary'
      //             >
      //               Create
      //             </button>
      //           </div>
      //         </th>
      //       </tr>
      //     </thead>
      //     <tbody>
      //       {malls.map((mall) => (
      //         <MallItem mall={mall} MD={DeleteMall} sEP={setEditPage} ME={EditMall} Mlength={malls.length} key={mall.id}/>
      //       ))}
      //     </tbody>
      //   </table>
      // </div>
      <div className={`${props.className} admin-table`}>
        <div className="row row-head">
          <div className='col displayed'>1111111</div>
          <div className='col'>2222222</div>
          <div className='col'>3333333</div>
        </div>
        <div className="row">
          <div className='col'>1</div>
          <div className='col'>2</div>
          <div className='col'>3</div>
        </div>
        <div className="row">
          <div className='col'>1</div>
          <div className='col'>2</div>
          <div className='col'>3</div>
        </div>
        <div className="row">
          <div className='col'>1</div>
          <div className='col'>2</div>
          <div className='col'>3</div>
        </div>
        <div className="row">
          <div className='col'>1</div>
          <div className='col'>2</div>
          <div className='col'>3</div>
        </div>
        <div className="row">
          <div className='col'>1</div>
          <div className='col'>2</div>
          <div className='col'>3</div>
        </div>
        <div className="row">
          <div className='col'>1</div>
          <div className='col'>2</div>
          <div className='col'>3</div>
        </div>
        <div className="row">
          <div className='col'>1</div>
          <div className='col'>2</div>
          <div className='col'>3</div>
        </div>
        <div className="row">
          <div className='col'>1</div>
          <div className='col'>2</div>
          <div className='col'>3</div>
        </div>
        <div className="row">
          <div className='col'>1</div>
          <div className='col'>2</div>
          <div className='col'>3</div>
        </div>
        <div className="row">
          <div className='col'>1</div>
          <div className='col'>2</div>
          <div className='col'>3</div>
        </div>
      </div>
    )
  }
}

export default Malls