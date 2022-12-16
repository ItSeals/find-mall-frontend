import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import SorCCreate from './allSAndC/SorCCreate';
import SorCEdit from './allSAndC/SorCEdit';
import ASAndCItem from './allSAndC/ASAndCItem';

const AllSAndC = (props) => {
  const [SAndC, setMalls] = useState([])
  const [createPage, setCreatePage] = useState(false)
  const [editPage, setEditPage] = useState({SOrC: {}, is: false})
  const apiEndPoint = "http://localhost:3000/mall";

  useEffect(() => {
    const getMalls = async () => {
      const { data: res } = await axios.get(apiEndPoint)
      setMalls(res)
    }
    getMalls()
  }, [SAndC])

  const AddMall = async (SOrC) => {
    await axios.post(apiEndPoint, SOrC);
    setMalls([...SAndC, SOrC]);
    setCreatePage(false)
  };

  const EditSOrC = async (SOrC) => {
    console.log(SOrC)
    await axios.put(apiEndPoint + "/" + SOrC.id, SOrC);
    const mallsClone = [...SAndC];
    const index = mallsClone.indexOf(SOrC);
    mallsClone[index] = { ...SOrC };
    setMalls(mallsClone);
    setEditPage({SOrC: {}, is: false})
  };

  const DeleteSOrC = async (SOrC) => {
    await axios.delete(apiEndPoint + "/" + SOrC.id);
    setMalls(SAndC.filter((sc) => sc.id !== SOrC.id));
  };

  if (createPage) {
    return (
      <SorCCreate {...props} AM={AddMall}/>
    )
  } else if (editPage.is) {
    return (
      <SorCEdit {...props} ME={EditSOrC} mall={editPage.SOrC}/>
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
              <div>Mall List</div>
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
          {SAndC.map((SOrC) => (
            <ASAndCItem mall={SOrC} MD={DeleteSOrC} sEP={setEditPage} ME={EditSOrC} Mlength={SAndC.length} key={SOrC.id}/>
          ))}
        </table>
      </div>
    )
  }
}

export default AllSAndC