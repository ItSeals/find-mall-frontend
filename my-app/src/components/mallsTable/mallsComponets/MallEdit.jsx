import React, { useState, useEffect } from 'react'

const MallEdit = (props) => {
  const [nameBody, setNameBody] = useState(props.mall.title)
  const [locationBody, setLocationBody] = useState(props.mall.location)
  let mall = {
    id: props.mall.id,
    title: nameBody,
    location: locationBody,
  }

  useEffect(() => {
    mall = {
      id: props.mall.id,
      title: nameBody,
      location: locationBody,
    }
  }, [nameBody])

  return (
    <div className={props.className} style={props.style}>
      <table className='admin-table' style={{width: '100%'}}>
        <thead>
          <tr>
            <th style={{position: 'relative'}}>
            <button 
              onClick={() => props.prePage({mall: {}, is: false})}
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
            <td style={{position: 'relative'}}>
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
            <td style={{position: 'relative'}}>
            <div className='title-input'>Location:</div>
            <input 
              value={locationBody}
              type='text'
              onChange={event => setLocationBody(event.target.value)}
            />
            </td>
          </tr>
          <tr><td></td></tr>
          <tr><td></td></tr>
          <tr><td></td></tr>
          <tr><td></td></tr>
          <tr><td></td></tr>
          <tr>
            <td>
              <button 
                onClick={() => props.ME(mall)}
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

export default MallEdit