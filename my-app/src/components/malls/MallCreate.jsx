import React, { useState, useEffect } from 'react'

const MallCreate = (props) => {
  const [nameBody, setNameBody] = useState('')
  const [locationBody, setLocationBody] = useState('')

  let mall = {
    id: props.Mlength + 1,
    title: nameBody,
    location: locationBody,
  }

  return (
    <div className={props.className} style={props.style}>
      <table className='admin' style={{width: '100%'}}>
        <tr>
          <th>
            Create
          </th>
        </tr>
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
        <tr>
          <td>
            <button 
              onClick={() => props.AM(mall)}
              className='btn btn-primary'
            >
              Create
            </button>
          </td>
        </tr>
        <tr><td></td></tr>
      </table>
    </div>
  )
}

export default MallCreate