import React from 'react'
import './sidebar.css'
import { Dashboard, Subject, Groups, Grading } from '@mui/icons-material';
import { Link } from "react-router-dom"
export default function sidebar() {
return (
<div className='sidebar'>
<div classmate='sidebarWrapper'>
<div className='sidebarMenu'>
<h3 className='sidebartitle'>DAsh</h3>
<ul className='sidebarList'>
<Link to="/">
<li className='sidebarlistitem active'>
<Dashboard className='sidebaricons' />
Dashboard
</li>
</Link>
</ul>
<h3 className='sidebartitle'>APPEARANCE</h3>
<ul className='sidebarlist'>
<li className='sidebar'listitem>
  <Dahboard className='sidebaricons'/>
Student Classes
</li>
<li className='sidebarlistitem'>
<subject classname='sidebaricons'/>
subject
</li>
</ul>
</div>
</div>
</div>
}
export default SideBar;
