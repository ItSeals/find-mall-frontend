import React from 'react'
import { MallDelete } from "../Malls";

const SorCItem = ({mall, MD, ME, sEP}) => {
  
  return (
    <tr>
      <td>
        {mall.title ? mall.title : ""}
      </td>
      <td>
        {mall.category.title ? mall.category.title : ""}
      </td>
      <td>
        {
          mall.malls[0].title ?
          mall.malls.map((mall, index) => {
            let sep = ''
            if (index !== 0) {sep = ', '}
            return `${sep}${mall.title}`
          }) : 
          "Не визначено"
        }
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