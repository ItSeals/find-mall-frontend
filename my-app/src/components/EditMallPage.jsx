import React, { useState, useEffect } from 'react'

const EditMallPage = ({...props}) => {
  const [nameBody, setNameBody] = useState(props.mall.title)
  let mall = {
    title: nameBody,
    description: "New description",
    status: 1,
    id: props.mall.id
  }

  useEffect(() => {
    mall = {
      title: nameBody,
      description: "New description",
      status: 1,
      id: props.mall.id,
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
          <div className='title-input'>Category:</div>
          <input 
            disabled
            type='text'
          />
          </td>
        </tr>
        <tr><td></td></tr>
        <tr>
          <td style={{position: 'relative'}}>
          <div className='title-input'>Tags: </div>
          <input 
            disabled
            type='text'
          />
          </td>
        </tr>
        <tr><td></td></tr>
        <tr>
          <td style={{position: 'relative'}}>
          <div className='title-input'>Location:</div>
          <input 
            disabled
            type='text'
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

export default EditMallPage