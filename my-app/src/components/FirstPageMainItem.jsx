import React from 'react'
import { MallDelete } from "./FirstPageMain";

const FirstPageMainItem = ({mall, MD, ME, sEP}) => {
  
  return (
    <tr>
      <td>
        <div>{mall.title ? mall.title : "Не визначено"}</div>
      </td>
      <td>
        <div>{mall.category ? mall.category : "Не визначено"}</div>
      </td>
      <td>
        <div>{mall.location ? mall.location : "Не визначено"}</div>
      </td>
      <td>
        <div className='d-flex'>
          <button
            onClick={() => sEP({mall: mall, is: true})}
            className='btn btn-primary'
          >
            Edit
          </button>
          <button
            onClick={() => MD(mall)}
            className="btn btn-dark"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  )
}

export default FirstPageMainItem