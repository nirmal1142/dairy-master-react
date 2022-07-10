import React, { useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { columns } from '../../products/columns';
import { rows } from '../../products/row';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDairyMaster } from '../../../store/services/dairyMaster';
import { clearDairyMasterError } from '../../../store/action/dairyMaster';
import  DataTableHeader from "../../DataTableHeader/index.js";


export default function ProductPage() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.dairyMasterReducer);

  useEffect(() => {
    dispatch(getAllDairyMaster());
  }, [dispatch]);


  useEffect(() => {
    if (error) {
      dispatch(clearDairyMasterError());
    }
  }, [error, dispatch]);


  return (
    <>
    <DataTableHeader/>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={data.data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </>
  );
}
