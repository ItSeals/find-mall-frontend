import React from 'react'
import MallsTable from './mallsTable/MallsTable'
import SideBar from './SideBar'

const Malls = ({ setActivePage }) => {
  return (
    <div className= 'container-fluid'>
      <div className ='row'>
        <SideBar className='col-2 min-vh-100' sAP={setActivePage}/>
        <MallsTable className='col gx-0 text-center'/>
      </div>
    </div>
  )
}

export default Malls