import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { columns } from '../../products/columns';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDairyMaster } from '../../../store/services/dairyMaster';
import { clearDairyMasterError } from '../../../store/action/dairyMaster';
import DataTableHeader from "../../DataTableHeader/index.js";
import AddProducts from '../../products/AddProducts';


export default function ProductPage() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.dairyMasterReducer);
  const [openAddProductModal, setOpenAddProductModal] = useState(false);

  useEffect(() => {
    dispatch(getAllDairyMaster());
  }, [dispatch]);


  useEffect(() => {
    if (error) {
      dispatch(clearDairyMasterError());
    }
  }, [error, dispatch]);


  const handleClickOpen = () => {
    setOpenAddProductModal(true);
  };

  const handleClose = () => {
    setOpenAddProductModal(false);
  };

  return (
    <>
      <DataTableHeader handleClickOpen={handleClickOpen} />
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={data?.data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
      <AddProducts handleClose={handleClose} handleClickOpen={handleClickOpen} openAddProductModal={openAddProductModal} />
    </>
  );
}
