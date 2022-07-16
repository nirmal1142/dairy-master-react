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
  // const { data, loading, error } = useSelector(state => state.dairyMasterReducer);
  const [openAddProductModal, setOpenAddProductModal] = useState(false);
  const dairyMasterDetails = useSelector(state => state?.dairyMasterReducer);

  useEffect(() => {
    if (dairyMasterDetails?.error && Boolean(dairyMasterDetails?.error)) {
      dispatch(clearDairyMasterError());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dairyMasterDetails?.error]);

  useEffect(() => {
    dispatch(getAllDairyMaster());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          rows={dairyMasterDetails?.data?.data}
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
