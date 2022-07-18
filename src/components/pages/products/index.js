import React, { useEffect, useMemo, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';

// import { columns } from '../../products/columns';
import { useDispatch, useSelector } from 'react-redux';
import { deleteDairyMaster, getAllDairyMaster } from '../../../store/services/dairyMaster';
import { clearDairyMasterError } from '../../../store/action/dairyMaster';
import DataTableHeader from "../../DataTableHeader/index.js";
import AddProducts from '../../products/AddProducts';
import ConfirmationModal from '../../ConfirmationModal/ConfirmationModal';

export default function ProductPage() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.dairyMasterReducer);
  const [openAddProductModal, setOpenAddProductModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false)
  const dairyMasterDetails = useSelector(state => state?.dairyMasterReducer);
  const [productId, setProductId] = useState('');

  useEffect(() => {
    if (error && Boolean(error)) {
      dispatch(clearDairyMasterError());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);


  useMemo(() => {
    dispatch(getAllDairyMaster());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const handleClickOpen = () => {
    setOpenAddProductModal(true);
  };

  const handleClose = () => {
    setProductId('');
    setOpenAddProductModal(false);
  };


  const handleShowOneDetails = (rowData) => {
    setProductId(rowData.row.id);
    handleClickOpen();
  }


  const handleDelete = () => {
    setOpenDeleteModal(false)
    dispatch(deleteDairyMaster(productId));
    setProductId('');

  }

  const handleOpenModal = (data) => {
    setProductId(data.row.id);
    setOpenDeleteModal(true)

  }

  const handleCloseModal = () => {
    setOpenDeleteModal(false)
  }



  const columns = [
    { field: 'date', headerName: 'Date', width: 130 },
    { field: 'shift', headerName: 'Shift', width: 130 },
    {
      field: 'profit',
      headerName: 'Profit',
      // type: 'number',
      width: 90,
    },
    {
      headerName: 'Action',
      width: 130,
      renderCell: (rowData) => {
        return (
          <>
            <div style={{ marginLeft: "15px" }} onClick={() => handleShowOneDetails(rowData)}>
              <InfoIcon />
            </div>
            <div style={{ marginLeft: "15px" }} onClick={() => handleOpenModal(rowData)}>
              <DeleteIcon />
            </div>

          </>
        );
      }
    }
  ];

  return (
    <>
      {loading === true ? (
        <div>Loading...</div>
      ) : (
        <>
          <DataTableHeader handleClickOpen={handleClickOpen} />
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={data && data}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
            />
          </div>
          <AddProducts handleClose={handleClose} productId={productId} openAddProductModal={openAddProductModal} />
        </>
      )}
      <ConfirmationModal
        handleCloseModal={handleCloseModal}
        handleOpenModal={handleOpenModal}
        openDeleteModal={openDeleteModal}
        handleConfirmDelete={handleDelete}
        title="Delete"
        message="Are you sure you want to delete this product?"
        
         />

    </>
  );
}
