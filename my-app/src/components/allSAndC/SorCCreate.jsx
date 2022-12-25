import React, { useState, useEffect } from 'react'
import axios from '../../api/axios'

const MallCreate = (props) => {
  const [nameBody, setNameBody] = useState('')
  const [categories, setCategories] = useState([])
  const [categoryBody, setCategoryBody] = useState(1)
  const [SOrCCategory, setSOrCCategory] = useState({})
  const [mallList, setMallList] = useState([])
  const [mallListBody, setMallListBody] = useState(1)
  const [SOrCMallList, setSOrCMallList] = useState({})
  let SOrC = {
    title: nameBody,
    category: SOrCCategory,
    malls: SOrCMallList
  }
  
  // "id": 1,
  // "title": "Maksym Shop",
  // "category": {
  //   "id": 5,
  //   "title": "Food"
  // },
  // "malls": [
  //   {
  //     "id": 1,
  //     "title": "Victoria gardens",
  //     "location": "за львовом"
  //   },
  //   {
  //     "id": 3,
  //     "title": "Spartak",
  //     "location": "Hetmana Mazepy St, 1B"
  //   }

  useEffect(() => {
    const getCategories = async () => {
      const { data: res } = await axios.get('http://localhost:3000/category')
      setCategories(res)
    }
    getCategories()
  }, [])

  
  useEffect(() => {
    const GetNeedCategory = async () => {
      const { data: res } = await axios.get(`http://localhost:3000/category/${categoryBody}`)
      setSOrCCategory({
        id: res.id,
        title: res.title
      })
    }
    GetNeedCategory()
  }, [categoryBody])

  useEffect(() => {
    const getMallList = async () => {
      const { data: res } = await axios.get('http://localhost:3000/mall')
      setMallList(res)
    }
    getMallList()
  }, [])

  
  useEffect(() => {
    const GetNeedMallList = async () => {
      const { data: res } = await axios.get(`http://localhost:3000/mall/${mallListBody}`)
      setSOrCMallList({
        id: res.id,
        title: res.title
      })
    }
    GetNeedMallList()
  }, [mallListBody])
  
  console.log(SOrC)
  return (
    <div className={props.className} style={props.style}>
      <table className='admin-table' style={{width: '100%'}}>
        <thead>
          <tr>
            <th style={{position: 'relative'}}>
            <button 
              onClick={() => props.prePage(false)}
              className='btn-pre-arrow'
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="7vh" height="7vh" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="20" y1="12" x2="4" y2="12"/><polyline points="10 18 4 12 10 6"/></svg>
            </button>
              Create
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='position-relative'>
            <div className='title-input'>Name:</div>
            <input 
              value={nameBody}
              type='text'
              onChange={event => setNameBody(event.target.value)}
            />
            </td>
          </tr>
          <tr><td></td></tr>
          <tr>
            <td className='position-relative'>
              <div className='title-input'>Category:</div>
              <select 
                value={categoryBody}
                onChange={event => setCategoryBody(event.target.value)}
              >
                {categories.map(cat => {
                  return <option value={cat.id}>{cat.title}</option>
                })}
              </select>
            </td>
          </tr>
          <tr><td></td></tr>
          <tr>
            <td className='position-relative'>
            <div className='title-input'>Tags:</div>
            <input 
              disabled
              value='В розробці'
              type='text'
              // onChange={event => setLocationBody(event.target.value)}
            />
            </td>
          </tr>
          <tr><td></td></tr>
          <tr>
            <td className='position-relative'>
              <div className='title-input'>MallList</div>
              <select 
                value={mallListBody}
                onChange={event => setMallListBody(event.target.value)}
              >
                {mallList.map(cat => {
                  return <option value={cat.id}>{cat.title}</option>
                })}
              </select>
            </td>
          </tr>
          <tr><td></td></tr>
          <tr>
            <td>
              <button 
                onClick={() => props.AM(SOrC)}
                className='btn btn-large'
              >
                Create
              </button>
            </td>
          </tr>
          <tr><td></td></tr>
        </tbody>
      </table>
    </div>
  )
}

export default MallCreate