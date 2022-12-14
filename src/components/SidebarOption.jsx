import React from 'react'

const SidebarOption = (icon, option) => {
  return (
    <div className='sidebar__option'>
        {icon}
        {option}
    </div>
  )
}

export default SidebarOption