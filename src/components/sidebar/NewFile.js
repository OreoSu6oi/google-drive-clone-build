import React from 'react'
import AddIcon from '@mui/icons-material/Add';

const NewFile = () => {
  return (
    <div class='newFile'>
        <div className='newFile__container'>
            {/* plus icon */}
            <AddIcon />
            <p>New</p>
        </div>
    </div>
  )
}

export default NewFile
