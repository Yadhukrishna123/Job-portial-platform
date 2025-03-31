import React from 'react'
import { MdDashboard } from "react-icons/md";
import { FaUsers, FaNetworkWired  } from "react-icons/fa";
import { SiCountingworkspro } from "react-icons/si";
import { Nav } from 'react-bootstrap'
import "./SideBar.css"

function SideBar() {
  return (
    <div className='side-bar'>
        <Nav defaultActiveKey="/" className="flex-column">
    <Nav.Link href="#home">
      <MdDashboard/>
      <span className='d-none d-md-inline'>Dashboard</span>
      </Nav.Link>
    <Nav.Link href="#link">
    <FaUsers/>
     <span className='d-none d-md-inline'> Users</span>
      </Nav.Link>
    <Nav.Link href="#link">
      <SiCountingworkspro/>
      <span className='d-none d-md-inline'>Jobs</span>
      </Nav.Link>
    <Nav.Link href="#link">
      <FaNetworkWired/>
     <span className='d-none d-md-inline'> Upplyed users</span>
      </Nav.Link>
    
    
  </Nav>
  
    </div>
  )
}

export default SideBar