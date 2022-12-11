import React from 'react'
import FirstPageMainItem from './FirstPageMainItem'

const FirstPageMain = (props) => {
  return (
    <div {...props} style={{textAlign: 'center'}}>
      <table className='admin' style={{width: '100%'}}>
        <tr>
          <th>
            <div>Name</div>
          </th>
          <th>
            <div>Category</div>
          </th>
          <th>
            <div>Location</div>
          </th>
          <th>
            <div>
              <button className='btn btn-primary'>Create</button>
            </div>
          </th>
        </tr>
        <FirstPageMainItem/>
        <FirstPageMainItem/>
      </table>
    </div>
  )
}

export default FirstPageMain