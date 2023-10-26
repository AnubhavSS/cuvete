import React from 'react'
import './style.css'
import { BiBarChart } from "react-icons/bi";
import { PiMedalLight } from "react-icons/pi";
import { HiOutlineDocument } from "react-icons/hi2";
const Sidebar = () => {
  return (
    <div className='containerS'>
       <div className='list'>
    <p><span className="icon"><BiBarChart/></span>Dashboard</p>
    <p><span className="icon"><PiMedalLight/></span>Skill Test</p>
    <p><span className="icon"><HiOutlineDocument/></span>Internships</p>
</div>
    </div>
  )
}

export default Sidebar