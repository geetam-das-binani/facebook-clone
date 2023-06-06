import React from 'react'
import '../Styles/sidebarRow.css'
import Avatar from "@mui/material/Avatar";


export default function SidebarRow({src,Icon,title}) {
  return (
    <div className='sidebarRow'> 
         {src && <Avatar src={src}/>}
         {Icon && Icon}

       <h4>{title}</h4>
    </div>
  )
}
