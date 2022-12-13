import React, { useState, useEffect } from 'react'

const CreateMallPage = ({...props}) => {
  const [nameBody, setNameBody] = useState('')
  let Mall = {
    title: nameBody,
    description: "New description",
    status: 1,
  }

  useEffect(() => {
    Mall = {
      title: nameBody,
      description: "New description",
      status: 1,
    }
  }, [nameBody])

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
              onClick={() => props.AM(Mall)}
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

export default CreateMallPage