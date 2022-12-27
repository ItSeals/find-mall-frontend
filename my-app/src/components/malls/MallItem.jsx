import React from 'react'
import { MallDelete } from "../Malls";

const MallItem = ({mall, MD, ME, sEP}) => {
  
  return (
    <tr>
      <td>
        {mall.title ? mall.title : ""}
      </td>
      <td>
        {mall.location ? mall.location : ""}
      </td>
      <td>
        <button
          onClick={() => sEP({mall: mall, is: true})}
          className='btn pt-1px'
        >
          Edit
        </button>
        <button
          onClick={() => MD(mall.id)}
          className="btn-del"
        ></button>
      </td>
    </tr>
  )
}

export default MallItem