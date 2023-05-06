import React, {useState, useEffect } from 'react';
import axios from 'axios';
import {
    DataGrid,
} from '@mui/x-data-grid';
import AddPost from './AddPost';

const columns = [
    { field: 'title', headerName: 'title', width: 200 },
    { field: 'body', headerName: 'body', width: 400 },
];


export default function UserPosts(props) {

    const [posts, setPosts] = useState([]);

    const getNewPost=(newPost)=>{
        setPosts(newPost);
    }

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `https://jsonplaceholder.typicode.com/posts?userId=${props.id}`,
            );
            setPosts(result.data);
        };
        fetchData();
    }, [props.id]);

    return (
        <div >
            
            <div style={{ padding:'3%' ,justifyContent:'center'}}>
               <div style={{display:'flex',flexDirection:'row',justifyContent: 'space-between',alignItems: 'center'}}>
                <h2 >my posts</h2>
                <AddPost  posts={posts} getNewPost={getNewPost} /></div>
                <DataGrid
                    rows={posts} columns={columns}
                />
            </div>

        </div>
    );
}
