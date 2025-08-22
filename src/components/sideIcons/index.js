import React from 'react'
import '../../styles/SideIcons.css'
import AddIcon from '@mui/icons-material/Add';

const SideIcons = () => {
    return (
        <div className='sideIcons'>
            <div className="sideIcons__top">
                <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/48/google-calendar-512.png" alt="Google Calendar" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Google_Keep_icon_%282015-2020%29.svg/2048px-Google_Keep_icon_%282015-2020%29.svg.png" alt="Google Keep" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Google_Tasks_2021.svg/2159px-Google_Tasks_2021.svg.png" alt="Google Tasks" />
            </div>

            <hr />

            <div className="sideIcons__plusIcon">
                <AddIcon />
            </div>
        </div>
    )
}

export default SideIcons