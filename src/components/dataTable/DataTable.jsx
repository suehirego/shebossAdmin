import React, { useState, useEffect } from 'react';
import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { Link, useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import axios from 'axios';


const DataTable = ({columns}) => {

      const location = useLocation();
      const path = location.pathname.split("/")[1];
      const [list, setList] = useState();
      const { data } = useFetch(`/${path}`)


      useEffect(() => {
            setList(data)
      }, [data]);


      const handleDelete = async (id) => {
            try {
              await axios.delete(`/${path}/${id}`);
              setList(list.filter((item) => item._id !== id));
            } catch (err) {}
      };

      //delete, edit and view single list item;
      const actionColumn = [
            {
                  field: "action",
                  headerName: "Action",
                  width: 130,
                  renderCell: (params) => {
                        return (
                              <div className="cellAction">
                                    
                                    <Link to={{pathname: `/${path}/` + params.row._id, user: params.row}} style={{ textDecoration: "none", color:'darkgreen' }}>
                                          <div className="viewButton">View</div>
                                    </Link>

                                    <div
                                          className="deleteButton"
                                          onClick={() => handleDelete(params.row._id)}
                                    >
                                          Delete
                                    </div>
                              </div>
                              
                        );
                  },
            },
      ];

      

      return (
            <div className='datatable'>
                  
                  <div className="datatableTitle" style={{textTransform: 'capitalize'}}>
                        {path}
                        <Link to={`/${path}/new`} style={{textDecoration: 'none' }} className="link">
                              Add New
                        </Link>
                  </div>
                  
                  {/* use concat to add view and delete btn to table */}
                  <DataGrid
                        className='datagrid'
                        rows={data}
                        columns={columns.concat(actionColumn)}
                        pageSize={9}
                        rowsPerPageOptions={[9]}
                        checkboxSelection
                        getRowId={(row) => row._id}
                  />
            </div>
      )
}

export default DataTable