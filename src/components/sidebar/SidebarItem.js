import React from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const SidebarItem = ({ arrow, icon, label }) => {
  return (
    <div class='sidebarItem'>
        <div className='sidebarItem__arrow'>
            {arrow && (<ArrowRightIcon />)}
        </div>

        <div className='sidebarItem_main'>
            {icon}
            <p>(label)</p>
        </div>
    </div>
  )
}

export default SidebarItem