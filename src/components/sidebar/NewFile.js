import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import '../../styles/NewFile.css';
import { Modal, Box, Button, Typography } from '@mui/material';

import { ref, uploadBytes, getDownloadURL, getMetadata } from 'firebase/storage';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { storage, db } from '../../firebase';

const NewFile = () => {
    const [open, setOpen] = useState(false);
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        if (!file) return;
        
        setUploading(true);
        
        //Firebase upload logic
        const storageRef = ref(storage, `files/${file.name}`);
        
        uploadBytes(storageRef, file).then((snapshot) => {
            console.log(snapshot);

            getDownloadURL(storageRef).then((url) => {
                addDoc(collection(db, 'myFiles'), {
                    timestamp: serverTimestamp(),
                    caption: file.name,
                    fileUrl: url,
                    size: file.size,
                });

                setUploading(false);
                setOpen(false);
                setFile(null);
            });
        });
        
        
        // Temporary mock upload
        setTimeout(() => {
            console.log('File uploaded:', file.name);
            setUploading(false);
            setOpen(false);
            setFile(null);
        }, 2000);
    };

    return (
        <div className='newFile'>
            <div className='newFile__container' onClick={handleOpen}>
                <AddIcon />
                <p>New</p>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="upload-modal-title"
                aria-describedby="upload-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                }}>
                    <Typography id="upload-modal-title" variant="h6" component="h2">
                        Select files you want to upload!
                    </Typography>
                    {uploading ? (
                        <Typography>Uploading...</Typography>
                    ) : (
                        <>
                            <input type="file" onChange={handleChange} />
                            <Button onClick={handleUpload} disabled={!file}>
                                Upload
                            </Button>
                        </>
                    )}
                </Box>
            </Modal>
        </div>
    );
};

export default NewFile
