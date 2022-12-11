import React from 'react'
import { MallDelete } from "./FirstPageMain";

const FirstPageMainItem = ({mall, MD}) => {
  
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
        <div>
          <button className='btn btn-primary'>Edit</button>
        </div>
        <div>
          <button
            onClick={() => MD(mall)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  )
}

export default FirstPageMainItem