import React, { useState, useEffect } from 'react'
import axios from 'axios'

const SorCEdit = (props) => {
  const [nameBody, setNameBody] = useState(props.mall.title)
  const [categories, setCategories] = useState([])
  const [categoryBody, setCategoryBody] = useState(props.mall.category.id)
  const [SOrCCategory, setSOrCCategory] = useState({})
  const [mallList, setMallList] = useState([])
  const [mallListBody, setMallListBody] = useState(props.mall.malls.map(mall => mall.id))
  const [SOrCMallList, setSOrCMallList] = useState({})

  let SOrC = {
    id: props.mall.id,
    title: nameBody,
    category: SOrCCategory,
    malls: SOrCMallList
  }

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
      var ML = []
      for (let index = 0; index < mallListBody.length; index++) {
        const { data: res } = await axios.get(`http://localhost:3000/mall/${mallListBody[index]}`)
        ML.push(res)
      }
      setSOrCMallList(ML)
    }
    GetNeedMallList()
  }, [mallListBody])
  
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
              Edit
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
              <div className='title-input'>Mall List</div>
              <select 
                multiple={true}
                size='2'
                value={mallListBody}
                onChange={e => {
                  var options = e.target.options;
                  var value = [];
                  for (var i = 0, l = options.length; i < l; i++) {
                    if (options[i].selected) {
                      value.push(options[i].value);
                    }
                  }
                  setMallListBody(value)
                }}
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
                onClick={() => props.ME(SOrC)}
                className='btn btn-large'
              >
                Edit
              </button>
            </td>
          </tr>
          <tr><td></td></tr>
        </tbody>
      </table>
    </div>
  )
}

export default SorCEdit