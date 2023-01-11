import React, { useState, useEffect } from 'react'

const MallCreate = (props) => {
  const [nameBody, setNameBody] = useState('')
  const [locationBody, setLocationBody] = useState('')

  let mall = {
    title: nameBody,
    location: locationBody,
  }

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
                onClick={() => props.AM(mall)}
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