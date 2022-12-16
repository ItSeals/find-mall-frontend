import React, { useState, useEffect } from 'react'

const SorCEdit = ({...props}) => {
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
      <table className='admin' style={{width: '100%'}}>
        <tr>
          <th>
            Edit
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
              onClick={() => props.ME(mall)}
              className='btn btn-primary'
            >
              Edit
            </button>
          </td>
        </tr>
        <tr><td></td></tr>
      </table>
    </div>
  )
}

export default SorCEdit