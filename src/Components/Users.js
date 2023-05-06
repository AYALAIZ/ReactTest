import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {
    DataGrid,
    GridToolbarContainer,
    GridToolbarFilterButton,
} from '@mui/x-data-grid';
import UserPosts from './UserPosts'

function CustomToolbar({ setFilterButtonEl }) {
    return (
        <GridToolbarContainer>
            <GridToolbarFilterButton ref={setFilterButtonEl} />
        </GridToolbarContainer>
    );
}

CustomToolbar.propTypes = {
    setFilterButtonEl: PropTypes.func.isRequired,
};

const columns = [
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 150 },
    {
        field: 'company', headerName: 'company Name',
        width: 150, filterable: false,
        valueFormatter: (params) => params.value.name,
    },
];


export default function Users() {

    const [filterButtonEl, setFilterButtonEl] = useState(null);
    const [users, setUsers] = useState({ hits: [] });
    const [id, setId] = useState({ hits: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://jsonplaceholder.typicode.com/users',
            );
            setUsers(result.data);
        };
        fetchData();
    }, []);

    return (
        <div style={{   display: 'flex',padding:'3%',
        flexDirection: 'row' ,justifyContent:'space-around'}}>
            <DataGrid
              onRowSelectionModelChange={(newRowSelectionModel) => {
                setId(users[newRowSelectionModel[0]-1].id)
              }}
                rows={users} columns={columns}
                slots={{
                    toolbar: CustomToolbar,
                }}
                slotProps={{
                    panel: {
                        anchorEl: filterButtonEl,
                    },
                    toolbar: {
                        setFilterButtonEl,
                    },
                }}
            />
            <UserPosts id={id}/>
        </div>
    );
}
