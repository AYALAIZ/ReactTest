import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

export default function AddPost(props) {
    const [open, setOpen] = useState(false);
    const [titlePost, setTitlePost] = useState(false);
    const [bodyPost, setBodyPost] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {

        setOpen(false);
        let p = {  body: bodyPost,id:31, title: titlePost,userId: props.posts[0].userId }
        const newPosts = [...props.posts,p];
        console.log('newp3', newPosts)
        props.getNewPost(newPosts);
    };

    const postUserTitle = (e) => {
        setTitlePost(e.target.value)
    }

    const postUserBody = (e) => {
        setBodyPost(e.target.value)
    }

    return (
        <div style={{paddin:'2%'}}>
            <Button variant="outlined" onClick={handleClickOpen}>
                add post
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>a new post</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please fill in the details
                    </DialogContentText>
                    <TextField
                        onChange={postUserTitle}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="title"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        onChange={postUserBody}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="body"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}