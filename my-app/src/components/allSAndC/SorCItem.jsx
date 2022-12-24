import React from 'react'
import { MallDelete } from "../Malls";

const SorCItem = ({mall, MD, ME, sEP}) => {
  
  return (
    <tr>
      <td>
        {mall.title ? mall.title : "Не визначено"}
      </td>
      <td>
        {mall.location ? mall.location : "Не визначено"}
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

export default SorCItem