import React from 'react'
import '../../styles/FileItem.css'

import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import DeleteIcon from '@mui/icons-material/Delete';
import { db, storage } from '../../firebase'
import { doc, deleteDoc } from 'firebase/firestore'
import { ref, deleteObject } from 'firebase/storage'

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const FileItem = ({ id, caption, timestamp, fileUrl, size }) => {
    const handleDelete = async () => {
        try {
            // Delete from Firestore
            await deleteDoc(doc(db, 'myFiles', id));
            
            // Delete from Storage (if fileUrl exists)
            if (fileUrl) {
                const storageRef = ref(storage, fileUrl);
                await deleteObject(storageRef);
            }
        } catch (error) {
            console.error('Error deleting file:', error);
        }
    };

    const handleDownload = () => {
        if (fileUrl) {
            window.open(fileUrl, '_blank');
        }
    };
    const fileDate = `${timestamp?.toDate().getDate()} ${monthNames[timestamp?.toDate().getMonth() + 1]} ${timestamp?.toDate().getFullYear()}`

    const getReadableFileSizeString = (fileSizeInBytes) => {
        let i = -1;
        const byteUnits = [' kB', ' MB', ' GB', ' TB', 'PB', 'EB', 'ZB', 'YB'];
        do {
            fileSizeInBytes = fileSizeInBytes / 1024;
            i++;
        } while (fileSizeInBytes > 1024);

        return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i];
    };

    return (
        <div className='fileItem'>
            <div className="fileItem--left" onClick={handleDownload}>
                <InsertDriveFileIcon />
                <p>{caption}</p>
            </div>
            <div className="fileItem--right">
                <p>{fileDate}</p>
                <p>{getReadableFileSizeString(size)}</p>
                <button 
                    onClick={handleDelete}
                    style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#666',
                        padding: '5px',
                        marginLeft: '10px',
                        display: 'flex',
                        alignItems: 'center'
                    }}
                    title="Delete file"
                >
                    <DeleteIcon />
                </button>
            </div>
        </div>
    )
}

export default FileItem